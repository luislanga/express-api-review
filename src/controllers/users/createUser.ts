import { Request, Response } from "express";
import { hashPassword } from "../../utils/hash";
import User from "../../models/User";

export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const hashedPassword = await hashPassword(password);

  const user = new User({ username, hashedPassword });
  await user.save()

  res.status(201).json(user)
};
