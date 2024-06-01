import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import useFont from "./useFont";
import { Font } from "../../shared/enums/Font";
import { LOCAL_FONT_STORAGE_KEY } from "../../constants";

describe("useFont", () => {
  it("should return an object with a setFont function", () => {
    const {
      result: {
        current: { getTailwindFont },
      },
    } = renderHook(() => useFont());
    expect(getTailwindFont(Font.SANS_SERIF)).toBe("font-inter");
    expect(getTailwindFont(Font.SERIF)).toBe("font-lora");
    expect(getTailwindFont(Font.MONOSPACE)).toBe("font-inconsolata");
  });

  it("should check if the localStorage is set", () => {
    const {
      result: {
        current: { setFont },
      },
    } = renderHook(() => useFont());

    const testFont = Font.SANS_SERIF;

    expect(setFont(testFont)).toBe(undefined);
    expect(localStorage.getItem(LOCAL_FONT_STORAGE_KEY)).toBe(testFont);
  });
});
