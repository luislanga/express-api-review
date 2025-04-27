import { Router } from "express";
import { getProducts } from "../controllers/products/getProducts";
import { createProduct } from "../controllers/products/createProduct";
import { updateProduct } from "../controllers/products/updateProduct";
import { deleteProduct } from "../controllers/products/deleteProduct";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.post("/", createProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

export default productsRouter;
