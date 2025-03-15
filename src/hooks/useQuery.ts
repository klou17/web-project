import { type QueryKey, type UseQueryOptions, useQuery as useQueryTanstack } from '@tanstack/react-query'

interface Props<TData> {
  queryFn: () => Promise<TData>
  key: QueryKey
  options?: Omit<UseQueryOptions<TData, Error>, 'queryKey' | 'queryFn'>
}

export const useQuery = <TData>({ queryFn, key, options }: Props<TData>) => {
  const { data, isPending, error } = useQueryTanstack<TData, Error>({
    queryKey: key,
    queryFn: queryFn,
    ...options,
  })

  return { data, isPending, error }
}
