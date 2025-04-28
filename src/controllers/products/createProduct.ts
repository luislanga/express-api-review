import { Request, Response } from "express";
import { createProductRepository } from "../../repositories/product-repository";
import { createProductSchema } from "../../schemas/product-schemas";
import { badRequest } from "../../utils/response";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { error } = createProductSchema.validate(req.body);

    if (error) {
      badRequest(res, error.details);
      return;
    }

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
