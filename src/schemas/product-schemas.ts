import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().min(1).required(),
  price: Joi.number().positive().required(),
  tags: Joi.array().items(Joi.string()).optional(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(1).optional(),
  price: Joi.number().positive().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
});
