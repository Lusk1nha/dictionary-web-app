import App from "./App";

import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    screen.debug();
  });
});
