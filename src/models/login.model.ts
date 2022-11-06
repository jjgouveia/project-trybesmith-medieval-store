import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/ILogin';
import connection from './connection';

export default class LoginModel {
  private connection = connection;

  async findOne(login: ILogin): Promise<ILogin[] | undefined> {
    const { username, password } = login;
    const [request] = await this.connection.execute<(
    ILogin & RowDataPacket)[]>(
      `SELECT * FROM Trybesmith.Users
        WHERE username = ? AND password = ?`,
      [username, password],
      );

    return request;
  }

  async create(login: ILogin): Promise<ILogin> {
    const { username, password } = login;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, password) VALUES (?, ?)',
      [username, password],
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    console.log(insertId);
    
    return { ...login };
  }
}