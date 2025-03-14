import { HttpSingerRepository } from '@/core/singers/infrastructure/HttpSingerRepository'
import { GetSinger } from '@/core/singers/useCases/getSinger'
import { useQuery } from '@/hooks/useQuery'

const singerRepository = new HttpSingerRepository()
const getSingersUseCase = new GetSinger(singerRepository)

export const useGetSinger = (id: string) => {
  return useQuery({
    queryFn: () => getSingersUseCase.execute(id),
    key: ['getAllSingersUseCase'],
  })
}
