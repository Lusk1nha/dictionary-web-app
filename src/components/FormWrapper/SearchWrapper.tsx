import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppSearchValidationSchema,
  AppSearchValidationValues,
} from "../../shared/schemas/AppSearchValidation";

interface ISearchWrapperProps {
  children: React.ReactNode;
  defaultValues?: Partial<AppSearchValidationValues>;
}

export function SearchWrapper(props: ISearchWrapperProps) {
  const { children } = props;

  const methods = useForm<AppSearchValidationValues>({
    defaultValues: {
      text_to_search: "Keyboard",
    },
    mode: "all",
    resolver: zodResolver(AppSearchValidationSchema),
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
