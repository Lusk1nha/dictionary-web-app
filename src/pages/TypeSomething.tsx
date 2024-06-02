import classNames from "classnames";
import useFont from "../hooks/useFont/useFont";

interface ITypeSomethingProps {
  title: string;
  message: string;
}

export function TypeSomething(props: ITypeSomethingProps) {
  const { title, message } = props;

  const { getTailwindFont } = useFont();

  const font = getTailwindFont();

  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div
        className={classNames(
          "flex flex-col items-center justify-center",
          font ? font : ""
        )}
      >
        <h2 className="text-[52px] md:text-[64px] pb-4">😊</h2>
        <h1 className="text-notDefined-title dark:text-notDefined-title-dark font-bold text-lg md:text-xl pb-6">
          {title}
        </h1>
        <p className="text-notDefined-text font-normal text-base md:text-lg text-center leading-6">
          {message}
        </p>
      </div>
    </div>
  );
}
