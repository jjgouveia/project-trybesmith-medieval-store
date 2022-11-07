import IProducts from '../interfaces/IProduct';
import { IResponse } from '../interfaces/IResponse';
import ProductModel from '../models/products.model';
import { validateNewProduct } from './validations/validateInputs';

export default class ProductService {
  public product = new ProductModel();

  public async getAll(): Promise<IProducts[]> {
    const users = await this.product.getAll();

    return users;
  }

  public async create(productInfo: IProducts): Promise<IResponse> {
    const error = validateNewProduct(productInfo);
    if (error.type) return { type: error.type, message: error.message };

    const data = await this.product.create(productInfo);

    return { type: 201, message: data, success: true };
  }
}