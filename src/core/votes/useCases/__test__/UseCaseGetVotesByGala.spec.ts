import { HttpMockVoteRepository } from './HttpMockVoteRepository'
import { GetVotesByGala } from '../getVotesByGala'

describe('Use Case Get Votes By Gala', () => {
  test('should return an array of singers and his total votes', async () => {
    const mockRepo = new HttpMockVoteRepository()
    const useCase = new GetVotesByGala(mockRepo)
    const singers = await useCase.execute('1')

    expect(singers.length).toEqual(2)

    expect(singers[0].id).toEqual('f86c39f9-4c6b-4b05-ac7d-d9a2894f19ce')
    expect(singers[0].lastName).toEqual('Bermejo')
    expect(singers[0].stageName).toEqual('Verpan 👀🥖')

    expect(singers[1].id).toEqual('6cae7205-c32d-4c8e-806f-89650f798642')
    expect(singers[1].lastName).toEqual('Bermejo')
    expect(singers[1].stageName).toEqual('Pancito')
  })
})
