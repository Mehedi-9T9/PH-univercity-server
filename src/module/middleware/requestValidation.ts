import { NextFunction, Response, Request } from 'express';
import { AnyZodObject } from 'zod';

const requstValidationSchema = (validationShema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const studentInfo = req.body;
      validationShema.parse(studentInfo);
      return next();
    } catch (error) {
      next(error);
    }
  };
};

export const requestValidations = {
  requstValidationSchema,
};
