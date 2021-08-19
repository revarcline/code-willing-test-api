import { Router } from "express";
import { transformPhrase } from "./Phrases";

// User-route
const phraseRouter = Router();
phraseRouter.post("/piglatin", transformPhrase);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/phrases", phraseRouter);
export default baseRouter;
