import { Request } from "express";
import { createProductRepository } from "../../../repositories/product-repository";
import { createProduct } from "../createProduct";

jest.mock("../../../repositories/product-repository", () => ({
  createProductRepository: jest.fn(),
}));

describe("createProduct Controller", () => {
  const createdProduct = {
    name: "Test Product",
    price: 100,
    tags: ["tag1", "tag2"],
  };

  beforeEach(() => {
    (createProductRepository as jest.Mock).mockResolvedValue(createdProduct);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 201 when product is created", async () => {
    const req = {
      body: createdProduct,
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any;

    await createProduct(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(createdProduct);
  });
});
