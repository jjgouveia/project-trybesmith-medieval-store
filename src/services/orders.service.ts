import { IOrder } from "../interfaces/IOrder";
import OrderModel from "../models/orders.model";

export default class OrdersService {
    public orderModel = new OrderModel();

    public async getAll(): Promise<IOrder[]> {
        const result = await this.orderModel.getAll();

        return result;
    };
}