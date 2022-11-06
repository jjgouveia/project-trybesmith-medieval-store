import loginSchema from './schemas';

const validateLogin = (login: object) => {
  const { error } = loginSchema.validate(login);
  if (error) return { type: 400, message: error.message };
  
  return { type: null, message: '' };
};

export default validateLogin;