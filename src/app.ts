import express from 'express';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import productsRouter from './routes/products.routes'

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use(httpErrorMiddleware);

app.get('/ping', (_req, res) => {
    res.status(200).send('pong');
})

export default app;
