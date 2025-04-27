import { NotFoundError } from "../errors/NotFoundError";
import Product, { IProduct } from "../models/Product";

export const getProductsRepository = async (): Promise<IProduct[]> => {
  const res = await Product.find({}, "name price tags");
  return res;
};

export const createProductRepository = async (data: {
  name: string;
  price: number;
  tags: string[];
}) => {
  const product = new Product(data);
  await product.save();
  return product;
};

export const updateProductRepository = async (
  id: string,
  data: Partial<IProduct>
) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!updatedProduct) {
    throw new NotFoundError("Product not found.");
  }

  return updatedProduct;
};

export const deleteProductRepository = async (id: string) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    throw new NotFoundError("Product not found.");
  }
  return deletedProduct;
};
