export interface IPhrase {
  original: string;
  pigLatin: string;
}

class Phrase implements IPhrase {
  public original: string;
  public pigLatin: string;

  constructor(phrase: string | IPhrase) {
    if (typeof phrase === "string") {
      this.original = phrase;
      this.pigLatin = this.pigLatinizePhrase(phrase);
    } else {
      this.original = phrase.original;
      this.pigLatin = phrase.pigLatin;
    }
  }

  pigLatinizePhrase(phrase: string): string {
    const phraseArray = phrase.split(" ");
    return "";
  }

  pigLatinizeWord(word: string): string {
    const vowels = ["a", "e", "i", "o", "u"];
    const newStr = "";
  }
}

export default Phrase;
