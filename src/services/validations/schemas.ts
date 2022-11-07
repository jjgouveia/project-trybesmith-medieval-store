import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const newProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const newUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export const newOrderSchema: Joi.Schema = Joi.object({
  productsIds: Joi.array().min(1).items(Joi.number()).required()
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});