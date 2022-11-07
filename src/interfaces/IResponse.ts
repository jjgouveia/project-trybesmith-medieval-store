export interface IResponse {
  type: number;
  token?: string;
  message?: string | object | [] | number[] | undefined;
  success?: boolean;
  userId?: number;
  BinaryRow?: [] | object;
}