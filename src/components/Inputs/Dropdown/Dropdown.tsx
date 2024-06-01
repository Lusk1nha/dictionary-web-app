import { useMemo, useState } from "react";
import { ArrowDown } from "../../../shared/assets/images/ArrowDown";
import useFont from "../../../hooks/useFont/useFont";
import classNames from "classnames";

interface IDropdownProps {
  name: string;
  options: Array<{ label: string; value: string; className?: string }>;
  value: string;
  onOptionClick: (value: string) => void;
}

export function Dropdown(props: IDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { getTailwindFont } = useFont();

  const font = getTailwindFont();

  const { name, options, value, onOptionClick } = props;

  function handleDropdownClick() {
    setIsOpen((prevState) => !prevState);
  }

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  return (
    <div
      role="combobox"
      className="relative"
      title="Click here to open the dropdown menu"
      aria-label="Dropdown menu"
    >
      <button
        name={name}
        className="flex items-center gap-4 cursor-pointer"
        onClick={handleDropdownClick}
      >
        <div
          className={classNames(
            "text-dropdown-text-light dark:text-dropdown-text-dark text-sm font-bold leading-6 transition-colors",
            font ? font : "font-serif"
          )}
        >
          {selectedOption?.label}
        </div>

        <div className="w-3 h-1.5 stroke-dropdown-icon">
          <ArrowDown />
        </div>
      </button>

      {isOpen ? (
        <div className="w-[183px] absolute transform -translate-x-1/2 left-1/2 md:right-0 md:transform-none md:translate-x-[unset] md:left-[unset] top-8 z-20">
          <div className="bg-dropdown-modal-light dark:bg-dropdown-modal-dark max-w-[183px] drop-shadow-light dark:drop-shadow-dark p-6 rounded-2xl transition-colors">
            <ul className="flex flex-col items-start list-none gap-2 md:gap-4">
              {options.map((option) => (
                <li
                  key={option.value}
                  className={classNames(
                    "w-full text-dropdown-text-light dark:text-dropdown-text-dark hover:text-dropdown-text-hover dark:hover:text-dropdown-text-hover text-base md:text-lg font-bold leading-6 transition-colors cursor-pointer",
                    option.value === value
                      ? "text-dropdown-text-active dark:text-dropdown-text-active"
                      : "",
                    option?.className ? option.className : ""
                  )}
                  onClick={() => onOptionClick(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
