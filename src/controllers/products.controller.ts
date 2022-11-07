import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  public productService = new ProductService();

  async getAll(_req: Request, res: Response): Promise<void> {
    const users = await this.productService.getAll();
    res.status(200).json(users);
  }

  async create(req: Request, res: Response): Promise<void | object> {
    const product = req.body;
    const { type, message, success } = await this.productService.create(product);
    if (success) return res.status(type).json(message);
    
    res.status(type).json({ message });
  }
}