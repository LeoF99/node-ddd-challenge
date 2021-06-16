import {
  Request, Response, NextFunction,
} from 'express';
import BusinessError from '../../domain/exceptions/business.exception';

const handleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BusinessError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message,
  });
};

export default handleErrors;
