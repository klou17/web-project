import { HttpSingerRepository } from '@/core/singers/infrastructure/HttpSingerRepository'
import { GetAllSingers } from '@/core/singers/useCases/getAllSingers'
import { useQuery } from '@/hooks/useQuery'

const singerRepository = new HttpSingerRepository()
const getAllSingersUseCase = new GetAllSingers(singerRepository)

export const useGetAllSingers = () => {
  return useQuery({
    queryFn: () => getAllSingersUseCase.execute(),
    key: ['getAllSingersUseCase'],
  })
}
