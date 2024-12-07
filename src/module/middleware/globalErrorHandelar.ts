import { NextFunction, Request, Response } from 'express';

const globalErrorHandle = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = error.message;

  res.status(statusCode).json({
    status: false,
    message,
    err: error,
  });
};
export default globalErrorHandle;
