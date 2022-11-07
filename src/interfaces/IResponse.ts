export interface IResponse {
  type: number;
  token?: string;
  message?: string | object;
  success?: boolean;
  userId?: number;
  BinaryRow?: [] | object;
}