import { Request, Response } from "express";
import ProductService from "../services/product.service";

export default class ProductController {
    public productService = new ProductService();

    async getAll(_req: Request, res: Response): Promise<void> {
        const users = await this.productService.getAll();
        res.status(200).json(users);
    };

    async create(req: Request, res: Response): Promise<void> {
        const product = req.body;
        const request = await this.productService.create(product);
        res.status(201).json(request);
    };
};