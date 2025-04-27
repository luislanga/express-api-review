import { Request, Response } from "express";
import { createProductRepository } from "../../repositories/product-repository";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, tags } = req.body;

    const product = await createProductRepository({
      name,
      price,
      tags,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};
