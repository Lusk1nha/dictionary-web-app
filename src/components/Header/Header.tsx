import Logo from "../../shared/assets/images/Logo.tsx";
import { FontChanger } from "./FontChanger/FontChanger.tsx";

import { ThemeChanger } from "./ThemeChanger/ThemeChanger.tsx";

export default function Header() {
  return (
    <header className="h-8 flex items-center justify-between">
      <div
        role="img"
        className="stroke-logoIcon w-8 h-8"
        title="Logo Icon"
        aria-label="Logo icon"
      >
        <Logo />
      </div>

      <section className="h-full flex gap-4">
        <FontChanger />
        <div className="bg-divider w-[1px] rotate-180" />
        <ThemeChanger />
      </section>
    </header>
  );
}
