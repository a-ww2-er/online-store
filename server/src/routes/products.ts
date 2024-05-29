import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductByCategory,
  getProductById,
  listProduct,
  updateProduct,
} from "../controllers/products";
import { errorHandler } from "../errorhandler";
import adminMiddleware from "../middlewares/adminMiddleware";
import authMiddleware from "../middlewares/authMiddleware";
import { imageUpload } from "../middlewares/imageUploadMiddleware";

const productsRoutes: Router = Router();

productsRoutes.post(
  "/",
  [imageUpload.single("image")],
  errorHandler(createProduct)
);

productsRoutes.get("/", errorHandler(listProduct));

productsRoutes.get("/category", errorHandler(getProductByCategory));

productsRoutes.put(
  "/:id",
  [authMiddleware, adminMiddleware],
  errorHandler(updateProduct)
);

productsRoutes.delete(
  "/:id",
  [authMiddleware, adminMiddleware],
  errorHandler(deleteProduct)
);

productsRoutes.get("/:id", errorHandler(getProductById));

export default productsRoutes;
