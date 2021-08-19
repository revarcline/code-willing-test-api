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
    const newPhraseArray = phraseArray.map((word: string): string =>
      this.pigLatinizeWord(word),
    );
    return newPhraseArray.join(" ");
  }

  pigLatinizeWord(word: string): string {
    const vowels = ["a", "e", "i", "o", "u"];
    let mutWord = word;
    let newWord = "";
    let storePunc = "";

    if (/[.,?!]/.exec(word[-1])) {
      storePunc = word[-1];
      mutWord = word.slice(0, -1);
    }

    if (vowels.indexOf(mutWord[0]) > -1) {
      newWord = mutWord.concat("way");
    } else {
      const firstMatch = mutWord.match(/[aeiou]/g) || 0;
      const vowel = mutWord.indexOf(firstMatch[0]);
      newWord = mutWord
        .substring(vowel)
        .concat(mutWord.substring(0, vowel) + "ay");
    }

    return newWord.concat(storePunc);
  }
}

export default Phrase;
