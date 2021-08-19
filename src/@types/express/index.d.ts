import { IUser } from "@entities/User";
import { IPhrase } from "@entities/Phrase";

declare module "express" {
  export interface Request {
    body: {
      user: IUser;
      phrase: IPhrase;
    };
  }
}
