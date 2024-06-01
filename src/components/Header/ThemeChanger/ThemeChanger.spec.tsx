import { describe, expect, it } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";

import { ThemeChanger } from "./ThemeChanger";
import { useTheme } from "../../../hooks/useTheme/useTheme";
import { LOCAL_THEME_STORAGE_KEY } from "../../../constants";

describe("ThemeChanger", () => {
  it("should render ThemeChanger component", () => {
    render(<ThemeChanger />);

    screen.debug();
  });

  it("should click in the button", () => {
    const {
      result: {
        current: { theme },
      },
    } = renderHook(() => useTheme());

    render(<ThemeChanger />);

    const button = screen.getByRole("button");

    button.click();

    expect(localStorage.getItem(LOCAL_THEME_STORAGE_KEY)).not.toBe(theme);

    screen.debug();
  });
});
