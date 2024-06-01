import { useState } from "react";
import { ArrowDown } from "../../../shared/assets/images/ArrowDown";

interface IDropdownProps {
  name: string;
  options: Array<{ label: string; value: string }>;
  value: string;
  onOptionClick: () => void;
}

export function Dropdown(props: IDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { name, options, value, onOptionClick } = props;

  function handleDropdownClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div role="combobox" className=" relative" aria-label="Dropdown menu">
      <button
        name={name}
        className="flex items-center gap-4 cursor-pointer"
        onClick={handleDropdownClick}
      >
        <div className="text-dropdown-text-light dark:text-dropdown-text-dark text-sm font-bold leading-6 transition-colors">
          {value}
        </div>

        <div className="w-3 h-1.5 stroke-dropdown-icon">
          <ArrowDown />
        </div>
      </button>

      {isOpen ? (
        <div className="w-[183px] absolute right-0 top-8 z-20">
          <div className="bg-dropdown-modal-light dark:bg-dropdown-modal-dark max-w-[183px] drop-shadow-lg p-6 rounded-2xl transition-colors">
            <ul className="flex flex-col items-start list-none gap-2 md:gap-4">
              {options.map((option) => (
                <li
                  className="w-full text-dropdown-text-light dark:text-dropdown-text-dark hover:text-dropdown-text-hover dark:hover:text-dropdown-text-hover text-base md:text-lg font-bold leading-6 transition-colors cursor-pointer"
                  onClick={onOptionClick}
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
