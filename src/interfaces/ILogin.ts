export interface ILogin {
  username: string;
  password:string;
  id?: number;
  userValidation: object | undefined;
}