import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../utils/jwt';

const authLogin = (req: Request, res:Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = validateToken(token as string);
    
    if (decoded.type) return res.status(401).json({ message: 'Invalid token' });
    req.body.user = decoded;
    
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authLogin;