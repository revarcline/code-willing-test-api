import { Router } from "express";
import { body, validationResult } from "express-validator";
import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import Phrase, { IPhrase } from "@entities/Phrase";

const { BAD_REQUEST, OK } = StatusCodes;

// User-route
const phraseRouter = Router();
phraseRouter.post(
  "/piglatin",
  // only letters, no numbers, punctuation, special chars, or empty input
  body("phrase")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("must only contain alphabetic characters and spaces"),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(BAD_REQUEST).json({ errors: errors.array() });
    }

    const { phrase } = req.body;
    const fullPhrase: IPhrase = new Phrase(phrase);
    return res.status(OK).json({ fullPhrase });
  }
);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/phrases", phraseRouter);
export default baseRouter;
