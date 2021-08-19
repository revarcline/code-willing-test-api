export interface IPhrase {
  id: number;
  original: string;
  pigLatin: string;
}

class Phrase implements IPhrase {
  public id: number;
  public original: string;
  public pigLatin: string;

  constructor(originalOrUser: string | IUser, pigLatin?: string, id?: number) {
    if (typeof originalOrUser === "string") {
      this.original = originalOrUser;
      this.pigLatin = pigLatin || "";
      this.id = id || -1;
    } else {
      this.original = originalOrUser.original;
      this.pigLatin = originalOrUser.pigLatin;
      this.id = originalOrUser.id;
    }
  }
}

export default Phrase;
