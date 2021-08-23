import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import Phrase, { IPhrase } from "@entities/Phrase";

const { BAD_REQUEST, OK } = StatusCodes;

/**
 * Transform a phrase.
 *
 * @param req
 * @param res
 * @returns
 */
export function transformPhrase(req: Request, res: Response) {
  const { phrase } = req.body;
  // response is not status, also gotta be an object
  const fullPhrase: IPhrase = new Phrase(phrase)
  return res.status(OK).json({ fullPhrase });
}

