import { Response } from "express";

export const badRequest = (res: Response, details?: any) => {
  return res.status(400).json({
    success: false,
    message: "Invalid request.",
    details,
  });
};
