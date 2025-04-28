import { Request, Response } from "express";
import { hashPassword } from "../../utils/hash";
import { createUserSchema } from "../../schemas/user-schemas";
import { badRequest } from "../../utils/response";
import {
  createUserRepository,
  getUserByUsername,
} from "../../repositories/user-repository";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { error } = createUserSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      badRequest(res, error.details);
      return;
    }

    const { username, password } = req.body;

    const isUsernameTaken = await getUserByUsername(username);

    if (isUsernameTaken) {
      badRequest(res, { error: "Username is taken." });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const user = await createUserRepository({ username, hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user.", error });
  }
};
