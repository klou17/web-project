import { HttpVoteRepository } from '@/core/votes/infastructure/HttpVoteRepository'
import { GetVotesByGala } from '@/core/votes/useCases/getVotesByGala'
import { useQuery } from '@/hooks/useQuery'

const voteRepository = new HttpVoteRepository()
const getVotesByGalaUseCase = new GetVotesByGala(voteRepository)

export const useGetVotesByGala = (galaId: string) => {
  return useQuery({
    queryFn: () => getVotesByGalaUseCase.execute(galaId),
    key: ['getVotesByGalaUseCase', galaId],
  })
}
