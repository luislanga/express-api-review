import { Request, Response } from "express";
import { compareHashedPassword } from "../../utils/hash";
import { getUserByUsername } from "../../repositories/user-repository";

export const authenticateUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await getUserByUsername(username);

  if (!user) {
    res.status(404).json({ message: "Invalid credentials." });
    return;
  }

  const isPasswordValid = await compareHashedPassword(
    password,
    user.hashedPassword
  );

  if (!isPasswordValid) {
    res.status(400).json({ message: "Invalid credentials." });
    return;
  }

  res.status(200).json({ username: user.username });
};
