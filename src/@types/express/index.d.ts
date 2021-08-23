import { IPhrase } from "@entities/Phrase";

declare module "express" {
  export interface Request {
    body: {
      phrase: IPhrase;
    };
  }
}
