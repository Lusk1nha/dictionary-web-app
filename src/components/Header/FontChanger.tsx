import useFont from "../../hooks/useFont/useFont";
import { Font } from "../../shared/enums/Font";
import { Dropdown } from "../Inputs/Dropdown/Dropdown";

const FONT_OPTIONS = [
  {
    label: "Sans Serif",
    value: "sans-serif",
    className: "font-inter",
  },
  {
    label: "Serif",
    value: "serif",
    className: "font-lora",
  },
  {
    label: "Mono",
    value: "monospace",
    className: "font-inconsolata",
  },
];

export function FontChanger() {
  const { font, setFont } = useFont();

  function handleFontChange(value: String) {
    if (!value) return;

    setFont(value as Font);
  }

  return (
    <div className="flex items-center gap-3">
      <Dropdown
        name="font-chooser"
        options={FONT_OPTIONS}
        value={font}
        onOptionClick={handleFontChange}
      />
    </div>
  );
}
