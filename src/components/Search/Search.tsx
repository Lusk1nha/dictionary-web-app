import { useFormContext } from "react-hook-form";
import { SearchBox } from "../Inputs/SearchBox/SearchBox";
import { AppSearchValidationValues } from "../../shared/schemas/AppSearchValidation";

interface ISearchProps {
  name: string;
  onSearch: (values: AppSearchValidationValues) => Promise<void>;
  placeholder?: string;
}

export function Search(props: ISearchProps) {
  const { name, placeholder, onSearch } = props;

  const { handleSubmit } = useFormContext<AppSearchValidationValues>();

  return (
    <form className="w-full" onSubmit={handleSubmit(onSearch)}>
      <SearchBox name={name} placeholder={placeholder} />
    </form>
  );
}
