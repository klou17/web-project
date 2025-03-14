import { render } from '@testing-library/react'
import Cantantes from '@/app/cantantes/page'

const routeComponents: Record<string, React.FC> = {
  '/cantantes': Cantantes,
}

export const renderRouter = (initialUrl: string) => {
  const Component = routeComponents[initialUrl]

  if (!Component) {
    throw new Error(`Missing component with route: ${initialUrl}`)
  }

  return render(<Component />)
}
