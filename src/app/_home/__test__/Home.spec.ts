import '@testing-library/jest-dom'
import { renderRouter } from '@/tests/renderRouter'
import { screen, waitFor } from '@testing-library/react'
import { useGetVotesByGala } from '@/app/_home/hooks/useGetVotesByGala'
import type { SingerVote } from '@/core/votes/domain/vote'

jest.mock('@/app/_home/hooks/useGetVotesByGala')

describe('Home tests', () => {
  it('should display loading indicator when fetching singers by gala', () => {
    const mock = useGetVotesByGala as jest.Mock
    mock.mockReturnValue({
      data: null,
      isPending: true,
      error: null,
    })

    renderRouter('/')

    expect(screen.getByText('Cargando...')).toBeInTheDocument()
  })
  it('should display error message when there is an error fetching singers by gala', () => {
    const mock = useGetVotesByGala as jest.Mock
    mock.mockReturnValue({
      data: null,
      isPending: false,
      error: 'Error 404',
    })

    renderRouter('/')

    expect(screen.getByText('Algo salió mal... Vuelve a intentarlo')).toBeInTheDocument()
  })
  it.skip('should display results by gala', async () => {
    const mockSingers: SingerVote[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        stageName: 'J.D.',
        photo: 'http://example.com/photo.jpg',
        totalVotes: 4,
      },
    ]
    const mock = useGetVotesByGala as jest.Mock
    mock.mockReturnValue({
      data: mockSingers,
      isPending: false,
      error: null,
    })

    renderRouter('/')

    await waitFor(() => {
      expect(screen.getByText('Votos por Gala')).toBeInTheDocument()
    })
  })
})
