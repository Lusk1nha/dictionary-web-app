import { SearchWrapper } from "../FormWrapper/SearchWrapper";
import Header from "../Header/Header";
import { SearchBox } from "../Inputs/SearchBox/SearchBox";

function App() {
  return (
    <SearchWrapper>
      <div className="bg-screen-light dark:bg-screen-dark w-full h-screen flex items-center justify-center">
        <div className="max-w-[736px] w-full h-full flex flex-col p-6 md:px-10 md:py-14 transition-colors">
          <Header />

          <main className="pt-6">
            <form className="w-full">
              <SearchBox
                name="text_to_search"
                placeholder="Search for any word…"
              />
            </form>
          </main>
        </div>
      </div>
    </SearchWrapper>
  );
}

export default App;
