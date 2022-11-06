import { ILogin } from '../interfaces/ILogin';
import { IResponse } from '../interfaces/IResponse';
import LoginModel from '../models/login.model';
import { createToken } from '../utils/jwt';
import { validateLogin } from './validations/validateInputs';

export default class LoginService {
  public loginModel = new LoginModel();

  public async findOne(login: ILogin): Promise<ILogin[] | undefined> {
    const hasUser = await this.loginModel.findOne(login);

    return hasUser;
  } 

  public async create(login: ILogin): Promise<IResponse> {
    const { username, password } = login;
    const error = validateLogin(login);
    if (error.type) return { type: error.type, message: error.message };

    const userValidation = await this.loginModel.findOne(login);
    
    if (!userValidation?.length) return { type: 401, message: 'Username or password invalid' };
    
    const token = createToken({ username, password });

    return { type: 200, token };
  }
} 