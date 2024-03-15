import { Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { CustomError } from '../utils/errors/customError';
import logger from '../utils/loggers/customLogger';

const customErrorHandler = (err: Error, req: Request, res: Response) => {
  // handled error
  if (err instanceof CustomError) {
    const { statusCode, errors, logging } = err;
    if (logging) {
      logger.error(
        JSON.stringify(
          {
            code: err.statusCode,
            errors: err.errors,
            stack: err.stack,
          },
          null,
          2,
        ),
      );
    }

    return res.status(statusCode).send({ errors });
  }

  // unhandled errors
  logger.error(JSON.stringify(err, null, 2));
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    errors: [
      {
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      },
    ],
  });
};

export default customErrorHandler;
