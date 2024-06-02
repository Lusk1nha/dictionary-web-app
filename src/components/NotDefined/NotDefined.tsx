import classNames from "classnames";
import useFont from "../../hooks/useFont/useFont";
import { Link, useNavigate } from "react-router-dom";
import { Urls } from "../../shared/enums/Urls";

export function NotDefined() {
  const navigate = useNavigate();
  const { getTailwindFont } = useFont();

  const font = getTailwindFont();

  return (
    <div className="w-full h-[500px] flex items-center">
      <div
        className={classNames(
          "flex flex-col items-center justify-center",
          font ? font : ""
        )}
      >
        <h2 className="text-[52px] md:text-[64px] pb-6">😕</h2>
        <h1 className="text-notDefined-title dark:text-notDefined-title-dark font-bold text-lg md:text-xl pb-6">
          No Definitions Found
        </h1>
        <p className="text-notDefined-text font-normal text-base md:text-lg text-center leading-6">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>

        <div className="pt-4">
          <Link className="text-hightlight font-normal text-base md:text-lg text-left leading-6 underline" to={Urls.Home}>Click here to go back to the home page</Link>
        </div>
      </div>
    </div>
  );
}
