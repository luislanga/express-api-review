import { Request, Response } from "express";
import { getProductsRepository } from "../../repositories/product-repository";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductsRepository();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};
