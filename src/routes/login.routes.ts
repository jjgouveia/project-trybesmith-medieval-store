import { Router } from 'express'; 
import LoginController from '../controllers/login.controller';

const loginController = new LoginController(); 

const router = Router();

router.post('/', loginController.create.bind(loginController));

export default router;