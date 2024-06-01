import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("Header", () => {
  it("renders a header element", () => {
    render(<Header />);

    screen.debug();
  });
});
