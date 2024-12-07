import { Response } from 'express';
type TSendResponse<T> = {
  message: string;
  statusCode: number;
  data: T;
};
const sendResponse = <T>(res: Response, data: TSendResponse<T>) => {
  res.status(data.statusCode).json({
    success: true,
    message: data.message,
    data: data.data,
  });
};
export default sendResponse;
