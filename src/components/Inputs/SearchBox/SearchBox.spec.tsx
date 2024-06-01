import { describe, it } from "vitest";
import { SearchBox } from "./SearchBox";
import { render, renderHook, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";

describe("SearchBox", () => {
  it("should render the SearchBox component", () => {
    const {
      result: { current },
    } = renderHook(() => useForm());

    render(
      <FormProvider {...current}>
        <SearchBox name={"teste"} />
      </FormProvider>
    );

    screen.debug();
  });
});
