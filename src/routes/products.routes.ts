import { Router } from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controller";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.post("/", createProduct);
productsRouter.put("/:id", updateProduct);

export default productsRouter;
