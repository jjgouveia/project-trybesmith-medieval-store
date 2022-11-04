require('dotenv/config');
const jwt = require('jsonwebtoken');

export const createToken = (data: object) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token as string;
};

export const validateToken = (token: string) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    console.log(data);
    return { type: null, message: data };
  } catch (error) {
    return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
  }
};

