'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 6 * 1000, // 6 sec
      },
    },
  })
}

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = makeQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
