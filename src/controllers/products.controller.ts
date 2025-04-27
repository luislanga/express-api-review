import { Request, Response } from "express";
import Product from "../models/Product";

export const getProducts = (req: Request, res: Response) => {
  res.status(200).send({ products: ["product 1", "product 2", "product 3"] });
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    const product = new Product({
      name,
      price,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Error creating product", error });
  }
};
