import Logo from "../../shared/assets/images/Logo.tsx";
import { Dropdown } from "../Inputs/Dropdown/Dropdown.tsx";

import { ThemeChanger } from "./ThemeChanger.tsx";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div
        role="img"
        className="stroke-logoIcon w-8 h-8"
        title="Logo Icon"
        aria-label="Logo icon"
      >
        <Logo />
      </div>

      <section className="flex gap-4">
        <Dropdown
          name="font-chooser"
          options={[
            {
              label: "Sans Serif",
              value: "sans-serif",
            },
            {
              label: "Serif",
              value: "serif",
            },
            {
              label: "Mono",
              value: "monospace",
            },
          ]}
          value={"Teste"}
          onOptionClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ThemeChanger />
      </section>
    </header>
  );
}
