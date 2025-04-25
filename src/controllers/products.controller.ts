import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) => {
  res.status(200).send({ products: ["product 1", "product 2", "product 3"] });
};
