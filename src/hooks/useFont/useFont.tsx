import { useCallback } from "react";
import { getFontFamily } from "../../shared/helpers/font-helper";
import { useSettingsStore } from "../../shared/stores/settings-store";
import { Font } from "../../shared/enums/Font";
import { LOCAL_FONT_STORAGE_KEY } from "../../constants";

export default function useFont() {
  const { font, setSettings } = useSettingsStore();

  const setFont = useCallback(
    (font: Font) => {
      setSettings({ font });
      localStorage.setItem(LOCAL_FONT_STORAGE_KEY, font);
    },
    [font]
  );

  const getTailwindFont = useCallback(
    (passedFont?: Font) => {
      const tailwind = getFontFamily(passedFont ?? font);
      return tailwind;
    },
    [font]
  );

  return { font, getTailwindFont, setFont };
}
