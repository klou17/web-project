import { getAuthCookie } from '@/core/auth/useCases/getAuthCookie'
import { HttpVoteRepository } from '@/core/votes/infastructure/HttpVoteRepository'
import { VoteSinger } from '@/core/votes/useCases/voteSinger'

const voteRepository = new HttpVoteRepository()
const voteSingerUseCase = new VoteSinger(voteRepository)

export const getAuthToken = getAuthCookie
export const voteSinger = (galaId: string, singerId: string, bearerToken: string) => {
  return voteSingerUseCase.execute(galaId, singerId, bearerToken)
}
