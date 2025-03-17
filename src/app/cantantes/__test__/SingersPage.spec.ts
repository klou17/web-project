import '@testing-library/jest-dom'
import { renderRouter } from '@/tests/renderRouter'
import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { useGetAllSingers } from '@/app/cantantes/_hooks/useGetAllSingers'
import type { Singer } from '@/core/singers/domain/singer'
import { VoteHook } from '@/app/cantantes/_hooks/useVoteSinger'
import { setTimeout } from 'node:timers'

jest.mock('@/app/cantantes/_hooks/useGetAllSingers')
jest.mock

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
  it('should display error message when there is an error fetching singers', () => {
    const mock = useGetAllSingers as jest.Mock
    mock.mockReturnValue({
      data: null,
      isPending: false,
      error: 'Error 404',
    })

    renderRouter('/cantantes')

    expect(screen.getByText('Algo salió mal... Vuelve a intentarlo')).toBeInTheDocument()
  })
  it('should display the list of singers when data is fetched', async () => {
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
  it('should open vote modal requesting to sign in by default', async () => {
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

    expect(screen.getByText('Debe iniciar sesión para poder votar')).toBeInTheDocument()
  })

  it('should open vote modal allowing to vote if logged in', async () => {
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
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'authToken=fakeLogin;',
    })

    const mock = useGetAllSingers as jest.Mock
    mock.mockReturnValue({
      data: mockSingers,
      isPending: false,
      error: null,
    })

    renderRouter('/cantantes')

    act(() => {
      const voteButton = screen.getByText('Votar')
      fireEvent.click(voteButton)
    })

    expect(screen.getByText('¿Confirmas tu voto para John?')).toBeInTheDocument()
  })
})
