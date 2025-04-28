import express from "express";
import productsRouter from "./routes/products.routes";
import db from "./db";
import usersRouter from "./routes/users.routes";
import authRouter from "./routes/auth.routes";

const app = express();

db();

app.use(express.json());

app.use("/", productsRouter);
app.use("/", usersRouter);
app.use("/", authRouter);

export default app;
