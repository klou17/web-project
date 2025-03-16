import { render } from '@testing-library/react'
import Cantantes from '@/app/cantantes/page'
import Home from '@/app/page'

const routeComponents: Record<string, React.FC> = {
  '/': Home,
  '/cantantes': Cantantes,
}

export const renderRouter = (initialUrl: string) => {
  const Component = routeComponents[initialUrl]

  if (!Component) {
    throw new Error(`Missing component with route: ${initialUrl}`)
  }

  return render(<Component />)
}
