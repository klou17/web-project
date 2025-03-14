import { Loader2, AlertCircle } from 'lucide-react'

interface StatusHandlerProps {
  isLoading: boolean
  error?: Error | null
  children: React.ReactNode
}

export const StatusHandler = ({ isLoading, error, children }: StatusHandlerProps) => {
  if (isLoading) {
    return (
      <div className={"flex flex-col w-full max-w-md mx-auto items-center justify-center h-64"}>
        <Loader2 className={"w-8 h-8 text-blue-500 animate-spin"} />
        <p className={"mt-2 text-gray-600 dark:text-gray-300"}>Cargando...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={"flex flex-col items-center justify-center h-64 bg-red-100 dark:bg-red-900 p-4 rounded-lg"}>
        <AlertCircle className={"w-8 h-8 text-red-600 dark:text-red-400"} />
        <p className={"mt-2 text-red-600 dark:text-red-400 font-semibold"}>Algo salió mal... Vuelve a intentarlo</p>
      </div>
    )
  }

  return <>{children}</>
}
