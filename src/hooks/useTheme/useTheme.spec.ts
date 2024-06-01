import { describe, expect, it } from "vitest";

import { renderHook } from "@testing-library/react";
import { useTheme } from "./useTheme";
import { Theme } from "../../shared/enums/Theme";

describe("useTheme", () => {
  it("should return an object with a toggleTheme function", () => {
    const {
      result: {
        current: { toggleTheme },
      },
    } = renderHook(() => useTheme());

    expect(toggleTheme(Theme.Light)).toBe(Theme.Dark);
    expect(toggleTheme(Theme.Dark)).toBe(Theme.Light);
  });
});
