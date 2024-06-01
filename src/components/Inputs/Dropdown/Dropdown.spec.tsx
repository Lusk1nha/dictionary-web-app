import { describe, it } from "vitest";

import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  it("should render the Dropdown component", () => {
    render(
      <Dropdown
        name="dropdown-teste"
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        value="option1"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    screen.debug();
  });
});
