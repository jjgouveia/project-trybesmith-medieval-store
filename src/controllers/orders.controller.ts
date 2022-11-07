import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrderController {
  private orderService = new OrdersService();

  public async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.orderService.getAll();

    res.status(200).json(result);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { productsIds, user } = req.body;
    const userId = user.id;
    const newOrder = await this.orderService.create(userId, productsIds);
    res.status(201).json(newOrder);
  }
}