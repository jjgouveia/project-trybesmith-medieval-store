import { IResponse } from '../interfaces/IResponse';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/users.model';
import { createToken } from '../utils/jwt';
import { validateNewUser } from './validations/validateInputs';

export default class UserService {
  public userModel = new UserModel();

  public async create(userInfo: IUser): Promise<IResponse> {
    const { username, classe, level } = userInfo;

    const error = validateNewUser(userInfo);
    if (error.type) return { type: error.type, message: error.message };

    await this.userModel.create(userInfo);

    const token = createToken({ username, classe, level });

    return { type: 201, token, success: true };
  }
}