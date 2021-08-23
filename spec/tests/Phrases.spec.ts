import supertest from "supertest";
import StatusCodes from "http-status-codes";
import { SuperTest, Test } from "supertest";

import app from "@server";
import Phrase, { IPhrase } from "@entities/Phrase";

describe("Phrase Entity", () => {
  it("should correctly transform a phrase starting with a consonant", (done) => {
    const testPhrase: IPhrase = new Phrase("Hello");
    expect(testPhrase.pigLatin).toEqual("Ellohay");
    done();
  });

  it("should correctly transform a phrase starting with a vowel", (done) => {
    const testPhrase: IPhrase = new Phrase("Exit");
    expect(testPhrase.pigLatin).toEqual("Exitway");
    done();
  });
});

describe("Phrase Routes", () => {
  const phrasesPath = "/api/phrases/piglatin";

  const { BAD_REQUEST, OK } = StatusCodes;
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe(`"POST:${phrasesPath}"`, () => {
    it(`should return a JSON object with the original phrase, pig latin version,
       and status code "${OK}" if the request was successful.`, async () => {
      // Setup spy
      const phrase = "Stinky Hair Away";
      const expectedPhrase = new Phrase("Stinky Hair Away");
      // Call API
      const result = await agent.post(phrasesPath).send({ phrase: phrase });

      expect(result.status).toBe(OK);
      // Caste instance-objects to 'User' objects
      expect(result.body.fullPhrase.original).toEqual(expectedPhrase.original);
      expect(result.body.fullPhrase.pigLatin).toEqual(expectedPhrase.pigLatin);
      expect(result.body.error).toBeUndefined();
    });

    it(`should return a JSON object containing an error message and a status code of
            "${BAD_REQUEST}" if the request was not valid.`, async () => {
      // Setup spy
      const badPhrase = "42069?";
      const errMsg = "must only contain alphabetic characters and spaces";
      // Call API
      const result = await agent.post(phrasesPath).send({ phrase: badPhrase });
      expect(result.status).toBe(BAD_REQUEST);
      expect(result.body.errors[0].msg).toBe(errMsg);
    });
  });
});
