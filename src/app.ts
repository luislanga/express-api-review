import express from "express";
import productsRouter from "./routes/products.routes";

const app = express();

app.use(express.json());

app.get("/", productsRouter);

export default app;
