import { NextFunction, Request, Response } from 'express';
import { Logger } from '@nestjs/common';

export function sentinel(req: Request, _: Response, next: NextFunction) {
  const logger = new Logger('SENTINEL');
  logger.log(
    `method: ${req.method}, url: ${req.url}, params: ${JSON.stringify(
      req.params,
    )}, query: ${JSON.stringify(req.query)}`,
  );
  return next();
}
