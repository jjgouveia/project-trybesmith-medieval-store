import { sign, verify } from 'jsonwebtoken';

require('dotenv/config');

export const createToken = (data: object) => {
  const token = sign({ data }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token as string;
};

export const validateToken = (token: string) => {
  try {
    const data = verify(token, process.env.JWT_SECRET as string);
    return { message: data };
  } catch (error) {
    return { type: 401, message: 'Invalid token' };
  }
};
