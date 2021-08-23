import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import { paramMissingError } from "@shared/constants";
import { buildPhrase } from "@shared/functions";

const { BAD_REQUEST, OK } = StatusCodes;

/**
 * Transform a phrase.
 *
 * @param req
 * @param res
 * @returns
 */
export async function transformPhrase(req: Request, res: Response):void {
  const { phrase } = req.body;
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  // this is whatever, just a reminder that u gotta do an await
  await (word): void => {
      return {}
  }
  // response is not status, also gotta be an object
  return res.status(OK).json({ phrase });
}

