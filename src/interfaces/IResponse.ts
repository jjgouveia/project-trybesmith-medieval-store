export interface IResponse {
  type: number;
  token?: string;
  message?: string | object;
  error?: boolean | undefined;
}