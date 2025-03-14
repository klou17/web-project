import '@testing-library/jest-dom'
import { renderRouter } from '@/tests/renderRouter'
import { screen } from '@testing-library/react'

describe('Singers tests', () => {
  it('renders a heading', () => {
    renderRouter('/cantantes')

    const title = screen.getByText('Earnest Green')

    expect(title).toBeDefined()
  })
})
