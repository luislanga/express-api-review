import { Request, Response } from "express";
import { deleteProductRepository } from "../../repositories/product-repository";
import { NotFoundError } from "../../errors/NotFoundError";

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProductRepository(id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Error deleting product", error });
  }
};
