import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/IOrder';
import connection from './connection';

export default class OrderModel {
  private connection = connection;

  public async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT
            orders.id, orders.userId, JSON_ARRAYAGG(p.id) as productsIds
            FROM Trybesmith.Orders as orders
            INNER JOIN Trybesmith.Products p
            ON p.orderId = orders.id
            GROUP BY orders.id;`);

    return result;
  }
  
  async create(userId: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  }
}