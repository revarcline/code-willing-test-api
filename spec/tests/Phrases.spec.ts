import supertest from "supertest";
import StatusCodes from "http-status-codes";
import { SuperTest, Test } from "supertest";

import app from "@server";
import Phrase, { IPhrase } from "@entities/Phrase";
import { pErr } from "@shared/functions";
import { IReqBody, IResponse } from "../support/types";

describe("Phrase Entity", () => {});

/*
describe("Phrase Routes", () => {
  const phrasesPath = "/api/phrase";
  const transformPhrasePath = `${phrasesPath}/add`;

  const { BAD_REQUEST, OK } = StatusCodes;
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe(`"POST:${transformPhrasePath}"`, () => {
    it(`should return a JSON object with all the users and a status code of "${OK}" if the
            request was successful.`, (done) => {
      // Setup spy
      const phrase: IPhrase = new Phrase("Stinky Hair Away");
      spyOn(UserDao.prototype, "getAll").and.returnValue(
        Promise.resolve(users),
      );
      // Call API
      agent.post(transformPhrasePath).end((err: Error, res: IResponse) => {
        pErr(err);
        expect(res.status).toBe(OK);
        // Caste instance-objects to 'User' objects
        const respUsers = res.body.users;
        const retUsers: User[] = respUsers.map((user: IUser) => {
          return new User(user);
        });
        expect(retUsers).toEqual(users);
        expect(res.body.error).toBeUndefined();
        done();
      });
    });

    it(`should return a JSON object containing an error message and a status code of
            "${BAD_REQUEST}" if the request was unsuccessful.`, (done) => {
      // Setup spy
      const errMsg = "Could not fetch users.";
      spyOn(UserDao.prototype, "getAll").and.throwError(errMsg);
      // Call API
      agent.get(getUsersPath).end((err: Error, res: IResponse) => {
        pErr(err);
        expect(res.status).toBe(BAD_REQUEST);
        expect(res.body.error).toBe(errMsg);
        done();
      });
    });
  });

});
*/
