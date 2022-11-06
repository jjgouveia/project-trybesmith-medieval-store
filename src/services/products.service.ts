import IProducts from '../interfaces/IProduct';
import { ProductModel } from '../models/products.model';

export default class ProductService {
  public product = new ProductModel();

  public async getAll(): Promise<IProducts[]> {
    const users = await this.product.getAll();

    return users;
  }

  public async create(productInfo: IProducts): Promise<IProducts> {
    const data = this.product.create(productInfo);

    return data;
  }
}