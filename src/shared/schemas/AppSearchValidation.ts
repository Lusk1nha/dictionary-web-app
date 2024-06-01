import { z } from "zod";

export const AppSearchValidationSchema = z.object({
  text_to_search: z.string().min(1, "Whoops, can’t be empty…"),
});

export type AppSearchValidationValues = z.infer<typeof AppSearchValidationSchema>;
