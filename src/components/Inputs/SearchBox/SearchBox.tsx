import classNames from "classnames";
import useFont from "../../../hooks/useFont/useFont";
import { SearchIcon } from "../../../shared/assets/images/SearchIcon";
import { Controller, useFormContext } from "react-hook-form";

interface ISearchBoxProps {
  name: string;
  placeholder?: string;
  onSearch?: () => void;
}

export function SearchBox(props: ISearchBoxProps) {
  const { name, placeholder, onSearch } = props;

  const { control } = useFormContext();

  const { getTailwindFont } = useFont();

  const font = getTailwindFont();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onBlur, onChange },
        fieldState: { error },
      }) => (
        <div className="flex flex-col gap-2">
          <div
            className={classNames(
              "w-full h-12 bg-searchbox-background-light dark:bg-searchbox-background-dark outline outline-0 flex items-center justify-between px-6 py-4 rounded-2xl hover:outline-1 outline-searchbox-active transition",
              error
                ? "outline-1 outline-searchbox-error"
                : "outline-searchbox-active"
            )}
          >
            <input
              name={name}
              type="text"
              placeholder={placeholder}
              className={classNames(
                "w-full bg-transparent placeholder:text-searchbox-placeholder-light placeholder:dark:text-searchbox-placeholder-dark text-searchbox-text-light dark:text-searchbox-text-dark text-base font-bold leading-5 outline-none border-none caret-searchbox-caret transition",
                font ? font : ""
              )}
              value={value}
              onBlur={onBlur}
              onChange={(e) => {
                const value = e.target.value;

                if (!value) return onChange("");

                onChange(value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && onSearch && value?.length > 0) {
                  onSearch();
                }
              }}
            />

            <button
              title="Search button"
              aria-label="Search button for searching the content"
              type="button"
              className="flex items-center justify-center"
              onClick={onSearch}
            >
              <SearchIcon />
            </button>
          </div>

          {error ? (
            <p
              className={classNames(
                "text-searchbox-error font-normal text-sm",
                font ? font : ""
              )}
            >
              {error.message}
            </p>
          ) : null}
        </div>
      )}
    />
  );
}
