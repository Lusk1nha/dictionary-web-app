import classNames from "classnames";
import useFont from "../../hooks/useFont/useFont";

export function Footer() {
  const { getTailwindFont } = useFont();

  const font = getTailwindFont();

  return (
    <footer
      className={classNames(
        "w-full pt-12 flex items-center justify-center",
        font ? font : ""
      )}
    >
      <p className="text-signature-light dark:text-signature-dark text-sm font-normal text-center break-keep">
        Developed by{" "}
        <a
          title="Created by Lucas 🙏"
          target="_blank"
          className="font-medium text-hightlight hover:underline"
          href="https://www.linkedin.com/in/olucaspedro/"
        >
          Lucas Pedro da Hora
        </a>
      </p>
    </footer>
  );
}
