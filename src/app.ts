import express from "express";
import productsRouter from "./routes/products.routes";
import db from "./db";
import usersRouter from "./routes/users.routes";
import authRouter from "./routes/auth.routes";
import { authenticateJWT } from "./middlewares/auth-middleware";

const app = express();

db();

app.use(express.json());

app.use("/", authenticateJWT, productsRouter);
app.use("/", usersRouter);
app.use("/", authRouter);

export default app;
