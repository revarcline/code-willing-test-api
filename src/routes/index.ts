import { Router } from "express";
import { transformPhrase } from "./Phrases";
import { body, validationResult } from "express-validator";
import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import Phrase, { IPhrase } from "@entities/Phrase";

const { BAD_REQUEST, OK } = StatusCodes;

// User-route
const phraseRouter = Router();
phraseRouter.post(
  "/piglatin",
  // no empties
  body("phrase").notEmpty().trim(),
  // only letters, no numbers or punctuation
  body("phrase").isAlpha(),
  (req: Request, res: Response) => {
    const { phrase } = req.body;
    const fullPhrase: IPhrase = new Phrase(phrase);
    return res.status(OK).json({ fullPhrase });
  }
);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/phrases", phraseRouter);
export default baseRouter;
