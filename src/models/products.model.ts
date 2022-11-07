import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProducts from '../interfaces/IProduct';
import connection from './connection';

export default class ProductModel {
  private connection = connection;

  async getAll(): Promise<IProducts[]> {
    const [result] = await this.connection.execute<IProducts[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return result;
  }

  async create(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  async updateOrderId(
    orderId: number,
    productId: number,
  ): Promise<number | boolean> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
      [orderId, productId],
    );
    const { affectedRows } = result;
    if (affectedRows > 0) return affectedRows;
    return false;
  }
}