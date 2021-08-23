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
      this.pigLatinizeWord(word)
    );
    return newPhraseArray.join(" ");
  }

  pigLatinizeWord(word: string): string {
    const vowels = ["a", "e", "i", "o", "u"];
    let mutWord = [...word];
    let newWord = "";
    let storePunc = "";
    // store capitalized status of first letter
    const capitalized = mutWord[0] === mutWord[0].toUpperCase();

    if (capitalized) {
      mutWord[0] = mutWord[0].toLowerCase();
    }

    if (/[.,?!]/.exec(word[-1])) {
      storePunc = word[-1];
      mutWord = [...word].slice(0, -1);
    }

    if (vowels.includes(mutWord[0])) {
      newWord = mutWord.join("").concat("way");
    } else {
      newWord = mutWord
        .join("")
        .substring(1)
        .concat(mutWord.join("").substring(0, 1) + "ay");
    }

    if (capitalized) {
      newWord = newWord[0].toUpperCase() + newWord.substring(1);
    }

    return newWord.concat(storePunc);
  }
}

export default Phrase;
