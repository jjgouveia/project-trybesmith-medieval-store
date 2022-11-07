import { Request, Response } from 'express';
import UserService from '../services/users.service';

export default class UserController {
  public userService = new UserService();

  public async create(req: Request, res: Response): Promise<void | object> {
    const user = req.body;
    const { type, message, success, token } = await this.userService.create(user);

    if (success) return res.status(type).json({ token });
    
    res.status(type).json({ message });
  }
}