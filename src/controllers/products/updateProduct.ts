import { Request, Response } from "express";
import { updateProductRepository } from "../../repositories/product-repository";
import { NotFoundError } from "../../errors/NotFoundError";

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedProduct = await updateProductRepository(id, updates);
    res.status(200).json(updatedProduct);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Error updating product", error });
  }
};
