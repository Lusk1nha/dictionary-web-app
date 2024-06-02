import App from "../components/App/App";

import { Route, Routes } from "react-router-dom";
import { WordPage } from "./WordPage";
import { TypeSomething } from "./TypeSomething";
import { Urls } from "../shared/enums/Urls";
import { NotDefined } from "./NotDefined";

export function Router() {
  return (
    <Routes>
      <Route path={Urls.Home} element={<App />}>
        <Route
          path={Urls.Home}
          element={
            <TypeSomething
              title="Type something"
              message="Type a word in the search bar to learn more about it."
            />
          }
        />
        <Route path={Urls.Word} element={<WordPage />} />
        <Route path={"*"} element={<NotDefined />} />
      </Route>
    </Routes>
  );
}
