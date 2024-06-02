import { API_DICTIONARY } from "../../constants";
import {
  WordDefinition,
  WordFailedDefinition,
} from "../schemas/WordDefinitionSchema";

export async function getWordDefinition(word: string) {
  const url = API_DICTIONARY.replace("{language}", "en") + word;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.json();
      return { data: null, error: error as WordFailedDefinition };
    }

    const data: WordDefinition[] = await response.json();

    return { data, error: null };
  } catch (error) {
    throw error;
  }
}
