import { Request, Response } from "express";
import { prismaClient } from "..";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { productsSchema } from "../schema/products";

export const createProduct = async (req: Request, res: Response) => {
  productsSchema.parse(req.body);
  console.log(req.body, req.file);
  const product = await prismaClient.product.create({
    data: {
      ...req.body,
      tags: req.body.tags.join(","),
    },
  });
  console.log(req.file);
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
