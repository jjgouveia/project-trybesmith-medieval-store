import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const orderController = new OrderController();

const router = Router();

router.get('/', orderController.getAll.bind(orderController));

export default router;