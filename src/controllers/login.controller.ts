import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  public serviceLogin = new LoginService();

  public async create(req: Request, res: Response) {
    const login = req.body;
    const { type, token, message } = await this.serviceLogin.create(login);

    if (token) res.status(type).json({ token });
    res.status(type).json({ message });
  }
}