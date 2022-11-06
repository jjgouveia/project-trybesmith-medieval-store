import { loginSchema, newProductSchema } from './schemas';

export const validateLogin = (login: object) => {
  const { error } = loginSchema.validate(login);
  if (error) return { type: 400, message: error.message };
  
  return { type: null, message: '' };
};

export const validateNewProduct = (product: object) => {
  const { error } = newProductSchema.validate(product);

  if (error) {
    return { 
      type: error.message.includes('required') ? 400 : 422, message: error.message,
    };
  }
  
  return { type: null, message: '' };
};
