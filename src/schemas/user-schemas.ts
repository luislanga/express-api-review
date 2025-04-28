import Joi from "joi";

export const createUserSchema = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(4).required(),
});
