import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import HttpException from '../utils/http.exception';

const httpErrorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log('err', err);
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
  
};

export default httpErrorMiddleware;