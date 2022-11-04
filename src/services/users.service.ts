import { IUser } from "../interfaces/IUser";
import UserModel from "../models/users.model";
import { createToken } from "../utils/jwt";

export default class UserService {
    public userModel = new UserModel();

    public async create(userInfo: IUser): Promise<object> {
        const { username, classe, level } = userInfo;
        await this.userModel.create(userInfo);

        const token = createToken({ username, classe, level })

        return { token };
    }
}