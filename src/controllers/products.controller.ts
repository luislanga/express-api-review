import { Request, Response } from "express";
import {
  createProductRepository,
  deleteProductRepository,
  getProductsRepository,
  updateProductRepository,
} from "../repositories/product-repository";
import { NotFoundError } from "../errors/NotFoundError";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductsRepository();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, tags } = req.body;

    const product = createProductRepository({
      name,
      price,
      tags,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedProduct = await updateProductRepository(id, updates);
    res.status(200).json(updatedProduct);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(500).json({ message: "Error updating product", error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProductRepository(id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(500).json({ message: "Error deleting product", error });
  }
};
