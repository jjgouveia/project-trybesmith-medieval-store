import { Router } from "express";
import ProductController from "../controllers/products.controller";

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll.bind(productController));
router.post('/', productController.create.bind(productController));

export default router;