import { describe, expect, it } from "vitest";
import { Theme } from "../../shared/stores/settings-store";
import { renderHook } from "@testing-library/react";
import { useTheme } from "./useTheme";

describe("useTheme", () => {
  it("should return an object with a toggleTheme function", () => {
    const currentTheme = Theme.Light;

    const {
      result: {
        current: { toggleTheme },
      },
    } = renderHook(() => useTheme());

    expect(toggleTheme(currentTheme)).toBe(Theme.Dark);
  });
});
