import {
  useForm as useFormReactHook,
  UseFormReturn,
  DefaultValues,
} from "react-hook-form";
import { TypeOf, z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props<T extends ZodType<any, any>> {
  schema: T;
  defaultValues?: DefaultValues<TypeOf<T>>;
}

export const useForm = <T extends ZodType<any, any>>({
  schema,
  defaultValues,
}: Props<T>): UseFormReturn<z.infer<T>> => {
  return useFormReactHook<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });
};
