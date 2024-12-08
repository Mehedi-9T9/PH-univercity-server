import { NextFunction, Response, Request } from 'express';
import { AnyZodObject } from 'zod';

const requstValidation = (validationSchema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const studentInfo = req.body;
      validationSchema.parse(studentInfo);
      return next();
    } catch (error) {
      next(error);
    }
  };
};

export default requstValidation 
