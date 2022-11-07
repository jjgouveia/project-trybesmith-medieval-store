import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import authLogin from '../middlewares/auth';

const orderController = new OrderController();

const router = Router();

router.get('/', orderController.getAll.bind(orderController));
router.post('/', authLogin, orderController.create.bind(orderController));

export default router;