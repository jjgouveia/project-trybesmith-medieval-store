import { IOrder } from '../interfaces/IOrder';
import { IResponse } from '../interfaces/IResponse';
import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';
import { validateNewOrder } from './validations/validateInputs';

export default class OrdersService {
  public orderModel = new OrderModel();

  public productModel = new ProductModel();

  public async getAll(): Promise<IOrder[]> {
    const result = await this.orderModel.getAll();

    return result;
  }
  
  async create(userId: number, productsIds: number[]): Promise<IResponse> {
    const error = validateNewOrder({ productsIds });
    if (error.type) return { type: error.type, message: error.message };

    const orderId: number = await this.orderModel.create(userId);
    const insertSaleId = productsIds.map(async (productId) => {
      await this.productModel.updateOrderId(orderId, productId);
    });
    await Promise.all(insertSaleId);

    return { type: 201, message: { userId, productsIds }, success: true };
  }
}