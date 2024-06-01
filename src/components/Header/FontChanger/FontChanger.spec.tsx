import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { FontChanger } from "./FontChanger";

describe("FontChanger", () => {
  it("should render FontChanger component", () => {
    render(<FontChanger />);

    screen.debug();
  });
});
