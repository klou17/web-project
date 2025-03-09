import { type UseFormReturn, type DefaultValues, useForm as useFormReactHook } from 'react-hook-form'
import type { TypeOf, z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props<T extends ZodType> {
  schema: T
  defaultValues?: DefaultValues<TypeOf<T>>
}

export const useForm = <T extends ZodType>({ schema, defaultValues }: Props<T>): UseFormReturn<z.infer<T>> => {
  return useFormReactHook<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  })
}
