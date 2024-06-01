import { Switch } from "./Switch";

import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("Switch", () => {
  it("should render the Switch component", () => {
    render(
      <Switch
        name={"teste"}
        active={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    screen.debug();
  });
});
