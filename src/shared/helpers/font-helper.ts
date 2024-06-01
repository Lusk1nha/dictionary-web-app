import { Font } from "../enums/Font";

export function getFontFamily(font: Font): string {
  const schema = {
    [Font.SANS_SERIF]: "font-inter",
    [Font.SERIF]: "font-lora",
    [Font.MONOSPACE]: "font-inconsolata",
  };

  return schema[font];
}
