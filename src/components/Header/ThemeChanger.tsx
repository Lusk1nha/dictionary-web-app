import classNames from "classnames";

import { useTheme } from "../../hooks/useTheme/useTheme";
import { Switch } from "../Inputs/Switch/Switch";

import MoonIcon from "../../shared/assets/images/MoonIcon";
import { Theme } from "../../shared/stores/settings-store";

export function ThemeChanger() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <Switch
        aria-label="Theme changer"
        name="theme-changer"
        active={theme === Theme.Dark}
        onClick={toggleTheme}
      />

      <div
        role="img"
        title="Moon Icon"
        aria-label="Moon icon"
        className={classNames(
          "w-5 h-5",
          theme === Theme.Dark
            ? "stroke-moonIcon-active"
            : "stroke-moonIcon-inative"
        )}
      >
        <MoonIcon />
      </div>
    </div>
  );
}
