import { Request, Response } from "express";
import UserService from "../services/users.service";

export default class UserController {
    public userService = new UserService();

    public async create(req: Request, res: Response): Promise<void> {
        const user = req.body;
        const request = await this.userService.create(user);
        res.status(201).json(request)
    };
};