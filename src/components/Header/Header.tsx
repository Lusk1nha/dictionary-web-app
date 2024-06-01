import Logo from "../../shared/assets/images/Logo.tsx";
import { FontChanger } from "./FontChanger.tsx";

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
        <FontChanger />
        <div className="bg-divider w-[1px] rotate-180" />
        <ThemeChanger />
      </section>
    </header>
  );
}
