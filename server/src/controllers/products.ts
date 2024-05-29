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
    success: true,
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
      success: true,
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
    const product = req.body;
    if (product.tags) {
      product.tags = product.tags.join(",");
    }

    const updatedProduct = {};
    //await prismaClient.product.delete()

    res.status(200).json({
      success: true,
      message: "Product Deleted",
      updatedProduct,
    });
  } catch (error) {
    throw new NotFoundException(
      "Product Not Found",
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }
};

export const listProduct = async (req: Request, res: Response) => {    
    try {
      const products = await prismaClient.product.findMany()
      console.log(products)
      res.status(200).json({
        success: true,
        message: "Product List",
        data: products,
      });
    } catch (error) {
      throw new NotFoundException(
        "Product Not Found",
        ErrorCode.PRODUCT_NOT_FOUND
      );
    }
};

export const getProductById = async (req: Request, res: Response) => {};

export const getProductByCategory = async (req: Request, res: Response) => {};
