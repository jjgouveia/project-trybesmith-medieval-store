import express from 'express';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import productsRouter from './routes/products.routes';
import userRouter from './routes/users.routes';
import orderRouter from './routes/orders.routes';
import loginRouter from './routes/login.routes';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use(httpErrorMiddleware);

app.get('/ping', (_req, res) => {
  res.status(200).send('pong');
});

export default app;
