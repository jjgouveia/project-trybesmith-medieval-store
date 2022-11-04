import { Router } from "express";

import UserController from "../controllers/users.controller";

const userController = new UserController();

const router = Router();

router.post('/', userController.create.bind(userController));

export default router;