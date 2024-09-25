import { NextFunction, Request, Response } from 'express';

import { ClientError } from '../config/errors/classes/ClientErrors';
import { RESPONSE_CONFIG } from '../config/constants/RESPONSES';
import { errorResponse } from '../helpers/responseHelpers';

const httpErrorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ClientError) {
    res.status(error.status).json(errorResponse(error.message));
    return next();
  }

  // In case error is not instance of ClientError (displayable ones), throw a generic one
  res.status(403).json(errorResponse(RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.GENERIC_ERROR_MSG));
  return next();
};

export default httpErrorMiddleware;
