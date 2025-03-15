import { GetSinger } from '@/core/singers/useCases/getSinger'
import { HttpMockSingerRepository } from './HttpMockSingerRepository'

describe('Use Case Get Singer', () => {
  test('should return a singer with id == 1', async () => {
    const mockRepo = new HttpMockSingerRepository()
    const useCase = new GetSinger(mockRepo)
    const user = await useCase.execute('1')

    expect(user?.id).toEqual('1')
    expect(user?.firstName).toEqual('Pan')
    expect(user?.lastName).toEqual('Bermejo')
    expect(user?.stageName).toEqual('Pancito')
  })
})
