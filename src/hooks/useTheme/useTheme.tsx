import { useCallback, useEffect } from "react";
import { useSettingsStore } from "../../shared/stores/settings-store";
import { DARK_CLASS, LOCAL_THEME_STORAGE_KEY } from "../../constants";

import { Theme } from "../../shared/enums/Theme";

export const useTheme = () => {
  const { theme, setSettings } = useSettingsStore();

  // Synchronize theme with localStorage on mount
  useEffect(() => {
    const storedTheme =
      (localStorage.getItem(LOCAL_THEME_STORAGE_KEY) as Theme) || Theme.Light;

    if (storedTheme) {
      setSettings({ theme: storedTheme });

      if (storedTheme === Theme.Dark) {
        document.body.classList.add(DARK_CLASS);
      } else {
        document.body.classList.remove(DARK_CLASS);
      }
    }
  }, [theme, setSettings]);

  const toggleTheme = useCallback(() => {
    const isDark = theme === Theme.Dark;

    if (isDark) {
      document.body.classList.remove(DARK_CLASS);
      setSettings({ theme: Theme.Light });
      localStorage.setItem(LOCAL_THEME_STORAGE_KEY, Theme.Light);

      return Theme.Light;
    } else {
      document.body.classList.add(DARK_CLASS);
      setSettings({ theme: Theme.Dark });
      localStorage.setItem(LOCAL_THEME_STORAGE_KEY, Theme.Dark);

      return Theme.Dark;
    }
  }, [theme, setSettings]);

  return {
    theme,
    toggleTheme,
  };
};
