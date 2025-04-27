import { Router } from "express";
import { createProduct, getProducts } from "../controllers/products.controller";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.post("/", createProduct)

export default productsRouter;
