import { Router } from "express";
import { authenticateUser } from "../controllers/auth/authenticateUser";

const authRouter = Router();

authRouter.post("/auth", authenticateUser);

export default authRouter;
