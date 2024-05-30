import { Request, Response } from "express";
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { InternalException } from "../exceptions/internal-exception";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { productsSchema } from "../schema/products";

export const createProduct = async (req: Request, res: Response) => {
  //COMMENT OUTS TAGS(LINE17) AND THIS PRODUCTS.SCHEMA.PARSE IF YOU WANT TO CREATE PRODUCT FROM POSTMAN
  productsSchema.parse(req.body);

  const product = await prismaClient.product.create({
    data: {
      ...req.body,
      image: req.file?.filename,
      tags: req.body.tags.join(","),
    },
  });

  res.status(200).json({
    sucess: true,
    message: "Product Created",
    product,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    if (product.tags) {
      product.tags = product.tags.join(",");
    }

    const updatedProduct = await prismaClient.product.update({
      where: {
        id: req.params.id,
      },
      data: product,
    });

    res.status(200).json({
      sucess: true,
      message: "Product Updated",
      updatedProduct,
    });
  } catch (error) {
    throw new NotFoundException(
      "Product Not Found",
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await prismaClient.product.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      sucess: true,
      message: "Product Deleted",
    });
  } catch (error) {
    throw new NotFoundException(
      "Product Not Found",
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }
};

export const listProduct = async (req: Request, res: Response) => {
  //TO SEND A SPECIFIC AMOUNT OF PRODUCTS BACK ELSE RETURN FIRST 5
  if (req.query.skip) {
    const count = await prismaClient.product.count();
    const products = await prismaClient.product.findMany({
      skip: +req?.query?.skip,
      take: 5,
    });

    res.status(200).json({
      sucess: true,
      data: products,
      count,
    });
  } else {
    const count = await prismaClient.product.count();
    const products = await prismaClient.product.findMany({
      take: 5,
    });

    res.status(200).json({
      sucess: true,
      data: products,
      count,
    });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await prismaClient.product.findFirstOrThrow({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      sucess: true,
      data: product,
    });
  } catch (error) {
    throw new NotFoundException(
      "Product Not Found",
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }
};

export const getProductByCartegory = async (req: Request, res: Response) => {
  try {
    const product = await prismaClient.product.findMany({
      where: {
        category: req.params.category,
      },
    });

    res.status(200).json({
      sucess: true,
      data: product,
    });
  } catch (error) {
    throw new NotFoundException(
      "Product Not Found",
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }
};

export const getProductsByQuery = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.query;

    if (typeof searchQuery === "string") {
      const products = await prismaClient.product.findMany({
        take: 4,
        where: {
          OR: [
            {
              category: {
                contains: searchQuery,
              },
            },
            {
              name: {
                contains: searchQuery,
              },
            },
          ],
        },
        
      });

      //SORTS BASED ON PRODUCT NAME ACCURACY TO SEARCH QUERY
      const sortedProducts = products.sort((a, b) => {
        const aContains = a.name.includes(searchQuery);
        const bContains = b.name.includes(searchQuery);
        
        if (aContains && !bContains) return -1;
        if (!aContains && bContains) return 1;
        return 0;
      })
      if (sortedProducts.length > 0) {
        res.status(200).json({
          sucess: true,
          data: sortedProducts,
        });
      } else {
        throw new NotFoundException(
          "No Product Not Found",
          ErrorCode.PRODUCT_NOT_FOUND
        );
      }
    } else {
      throw new BadRequestException(
        "Invalid search query",
        ErrorCode.INVALID_QUERY
      );
    }
  } catch (error) {
    console.log(error)
    throw new InternalException(
      "Server Error",
      error,
      ErrorCode.INTERNAL_EXCEPTION
    );
  }
};
