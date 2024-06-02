import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getWordDefinition } from "../shared/services/dictionary-service";
import { Definition } from "../components/Definition/Definition";
import { Urls } from "../shared/enums/Urls";

export function WordPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const { data: word } = useQuery({
    queryKey: [search],
    queryFn: getWord,
    refetchOnWindowFocus: false,
    retry: false,
  });

  async function getWord() {
    if (!search) {
      return;
    }

    const { data, error } = await getWordDefinition(search);

    if (error) {
      navigate(Urls.Error);
    }

    return data?.[0];
  }

  if (!word) {
    return null;
  }

  return <Definition {...word} />;
}
