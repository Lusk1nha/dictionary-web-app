import { Phonetic } from "../schemas/WordDefinitionSchema";

export function randomizePhonetic(phonetics: Phonetic[]) {
  const phonetic = phonetics[Math.floor(Math.random() * phonetics.length)];
  return phonetic;
}
