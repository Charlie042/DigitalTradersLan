import type { NextFunction, Request, RequestHandler, Response } from 'express';

const DB_CONNECTION_ERROR_CODES = new Set([
  'UND_ERR_CONNECT_TIMEOUT',
  'EADDRNOTAVAIL',
  'ECONNRESET',
  'ECONNREFUSED',
  'ETIMEDOUT',
  'ENOTFOUND',
]);

export function asyncHandler(fn: RequestHandler): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export function isDbConnectionError(err: unknown): boolean {
  let current: unknown = err;

  for (let depth = 0; depth < 5 && current; depth++) {
    const e = current as { code?: string; message?: string; cause?: unknown };

    if (e.code && DB_CONNECTION_ERROR_CODES.has(e.code)) {
      return true;
    }

    const message = e.message ?? '';
    if (message.includes('fetch failed') || message.includes('Error connecting to database')) {
      return true;
    }

    current = e.cause;
  }

  return false;
}
