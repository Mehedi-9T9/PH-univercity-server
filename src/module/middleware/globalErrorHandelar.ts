import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrroSourceDemo } from '../../App/GlogalInterface/errorTypes';
import handleZodError from '../../App/Errors/handleZodError';
import handleMongooseError from '../../App/Errors/handleMongooseError';
import config from '../../config';
import handleCastError from '../../App/Errors/handleCastError';

const globalErrorHandle: ErrorRequestHandler = async (
  err,
  req,
  res,
  next,
) => {

  //default error values
  let statusCode = err.statusCode || 500;
  let message = err?.message || "something went wrong";
  let errorSources: TErrroSourceDemo = [
    { path: '', message: '' }
  ]

  if (err instanceof ZodError) {
    const getError = handleZodError(err)
    statusCode = getError.statusCode
    message = getError.message
    errorSources = getError.errorSources

  }

  //Todo !!!!
  else if(err.name ==="ValidationError"){

    const simplifyError =handleMongooseError(err)
    statusCode = simplifyError.statusCode
    message = simplifyError.message
    errorSources = simplifyError.errorSources

  }

  else if(err.name ==="CastError"){

    const simplifyError =handleCastError(err)
    statusCode = simplifyError.statusCode
    message = simplifyError.message
    errorSources = simplifyError.errorSources

  }



  res.status(statusCode).json({
    status: false,
    message,
    errorSources,
    // err,
    stack: config.NODE_ENV ==="development"? err?.stack :null


  });
};
export default globalErrorHandle;
