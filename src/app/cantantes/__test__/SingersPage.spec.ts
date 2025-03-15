import '@testing-library/jest-dom'
import { renderRouter } from '@/tests/renderRouter'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { useGetAllSingers } from '@/app/cantantes/hooks/useGetAllSingers'
import type { Singer } from '@/core/singers/domain/singer'

jest.mock('@/app/cantantes/hooks/useGetAllSingers')

describe('Singers tests', () => {
  it('should display loading indicator when fetching singers', () => {
    const mock = useGetAllSingers as jest.Mock
    mock.mockReturnValue({
      data: null,
      isPending: true,
      error: null,
    })

    renderRouter('/cantantes')

    expect(screen.getByText('Cargando...')).toBeInTheDocument()
  })
  it('should display error message when there is an error fetching singers', async () => {
    const mockSingers: Singer[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        stageName: 'J.D.',
        photo: 'http://example.com/photo.jpg',
        bio: 'A great singer.',
        birthDate: new Date('1990-01-01'),
        active: true,
      },
    ]
    const mock = useGetAllSingers as jest.Mock
    mock.mockReturnValue({
      data: mockSingers,
      isPending: false,
      error: null,
    })

    renderRouter('/cantantes')

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('A great singer.')).toBeInTheDocument()
    })
  })
  it('should open vote modal when VoteButton is clicked', async () => {
    const mockSingers: Singer[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        stageName: 'J.D.',
        photo: 'http://example.com/photo.jpg',
        bio: 'A great singer.',
        birthDate: new Date('1990-01-01'),
        active: true,
      },
    ]
    const mock = useGetAllSingers as jest.Mock
    mock.mockReturnValue({
      data: mockSingers,
      isPending: false,
      error: null,
    })

    renderRouter('/cantantes')

    const voteButton = screen.getByText('Votar')
    fireEvent.click(voteButton)

    expect(screen.getByText('¿Confirmas tu voto para John?')).toBeInTheDocument()
  })
})
