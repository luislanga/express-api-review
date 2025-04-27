import express from "express";
import productsRouter from "./routes/products.routes";
import db from "./db";

const app = express();

db();

app.use(express.json());

app.use("/", productsRouter);

export default app;
