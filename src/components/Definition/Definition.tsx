import classNames from "classnames";
import useFont from "../../hooks/useFont/useFont";
import { WordDefinition } from "../../shared/schemas/WordDefinitionSchema";
import { PlayIcon } from "../../shared/assets/images/PlayIcon";
import { Notation } from "./components/Notation";
import { NewWindowIcon } from "../../shared/assets/images/NewWindowIcon";

import { randomizePhonetic } from "./../../shared/helpers/definition-helper";

interface IDefinitionProps extends WordDefinition {}

export function Definition(props: IDefinitionProps) {
  const { word, phonetic, phonetics, meanings, sourceUrls } = props;

  const { getTailwindFont } = useFont();

  const font = getTailwindFont();

  function handlePlaySound() {
    const phonetic = phonetics?.filter((phonetic) => phonetic.audio);

    if (phonetic?.length === 0) return;

    const randomPhonetic = randomizePhonetic(phonetic);

    try {
      const audio = new Audio(randomPhonetic.audio);
      audio.play();
    } catch (error) {
      throw new Error("Failed to play audio");
    }
  }

  return (
    <section
      className={classNames(
        "w-full flex flex-col gap-8 md:gap-[42px] transition-colors",
        font ? font : ""
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-definition-word-light dark:text-definition-word-dark font-bold text-[32px] md:text-[64px]">
            {word}
          </h1>
          <h2 className="text-definition-phonetic text-lg md:text-2xl font-normal leading-6">
            {phonetic}
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="w-12 h-12 md:w-[75px] md:h-[75px] flex items-center justify-center"
            type="button"
            onClick={() => handlePlaySound()}
          >
            <PlayIcon />
          </button>
        </div>
      </div>

      {meanings?.map((meaning, key) => (
        <div key={key} className="flex flex-col gap-4 md:gap-11">
          <Notation text={meaning.partOfSpeech} />

          <div className="flex flex-col gap-8">
            <h4 className="text-definition-secondary font-normal text-base md:text-xl">
              Meaning
            </h4>

            <ul className="flex flex-col gap-3 md:pl-6">
              {meaning.definitions.map((definition, key) => (
                <li
                  key={key}
                  className="flex text-definition-list-light dark:text-definition-list-dark text-[15px] md:text-lg leading-6 gap-4"
                >
                  <div className="text-definition-dot">•</div>

                  <div className="flex flex-col gap-[13px]">
                    <p>{definition.definition}</p>
                    {definition.example && (
                      <p className="text-definition-example">
                        “{definition.example}”
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {meaning.synonyms.length > 0 ? (
            <div className="flex gap-6">
              <h4
                title="Synonyms"
                aria-label="Synonyms"
                className="text-definition-secondary font-normal text-base md:text-xl"
              >
                Synonyms
              </h4>

              <ul className="flex flex-col">
                {meaning.synonyms.map((synonym, key) => (
                  <li
                    key={key}
                    title={synonym}
                    className="text-base md:text-xl font-bold text-definition-synonym"
                  >
                    {synonym}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ))}

      <hr className="border-definition-divisor-light dark:border-definition-divisor-dark w-full" />

      {sourceUrls.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-6">
          <h5 className="text-sm text-definition-source underline">Source</h5>

          <ul className="flex flex-col">
            {sourceUrls.map((url, key) => (
              <li title={url} key={key}>
                <a
                  title="Open in new window"
                  aria-label="Open in new window"
                  href={url}
                  target="_blank"
                  className="flex items-center text-sm stroke-definition-newwindow text-definition-link-light dark:text-definition-link-dark underline gap-[9px]"
                >
                  <p>{url}</p>
                  <NewWindowIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
