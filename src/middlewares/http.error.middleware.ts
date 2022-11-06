import { ErrorRequestHandler } from 'express';
import HttpException from '../utils/http.exception';

const httpErrorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  console.log('err', err);
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;