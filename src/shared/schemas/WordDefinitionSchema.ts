export interface WordDefinition {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License2;
  sourceUrls: string[];
}

export interface WordFailedDefinition {
  title: string;
  message: string;
  resolution: string;
}

export interface Phonetic {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: any[];
  antonyms: any[];
}

export interface Definition {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
}

export interface License2 {
  name: string;
  url: string;
}
