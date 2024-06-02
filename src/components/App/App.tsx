import {
  AppSearchValidationSchema,
  AppSearchValidationValues,
} from "../../shared/schemas/AppSearchValidation";

import { SearchWrapper } from "../SearchWrapper/SearchWrapper";
import Header from "../Header/Header";

import { Search } from "../Search/Search";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";

function App() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  async function handleSearch(values: AppSearchValidationValues) {
    const { search_text } = values;

    if (!AppSearchValidationSchema.parse(values)) {
      throw new Error("Invalid search text");
    }

    const trimmedSearchText = search_text?.trim();

    navigate(`/word?search=${trimmedSearchText}`);
  }

  return (
    <SearchWrapper defaultValues={{ search_text: search || "" }}>
      <div className="bg-screen-light dark:bg-screen-dark w-full h-full flex items-start justify-center">
        <div className="max-w-[736px] w-full h-full flex flex-col p-6 md:px-10 md:pt-14 transition-colors">
          <Header />

          <main className="pt-6 flex flex-col grow">
            <Search
              name="search_text"
              placeholder="Search for any word…"
              onSearch={handleSearch}
            />

            <div className="h-full pt-11">
              <Outlet />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </SearchWrapper>
  );
}

export default App;
