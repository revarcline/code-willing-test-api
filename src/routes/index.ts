import { Router } from "express";
import { transformPhrase } from "./Phrases";
import { body, validationResult } from "express-validator"

// User-route
const phraseRouter = Router();
phraseRouter.post("/piglatin", body('phrase').not().isEmpty().trim(),
                  transformPhrase);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/phrases", phraseRouter);
export default baseRouter;
