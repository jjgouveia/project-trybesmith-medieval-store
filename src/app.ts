import express from 'express';

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
    res.status(200).send('pong');
})

export default app;
