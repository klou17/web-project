import { getAuthCookie, getCookieValue } from '@/core/auth/useCases/getAuthCookie'
import { HttpVoteRepository } from '@/core/votes/infastructure/HttpVoteRepository'
import { VoteSinger } from '@/core/votes/useCases/voteSinger'

const voteRepository = new HttpVoteRepository()
const voteSingerUseCase = new VoteSinger(voteRepository)

export const getAuthToken = getAuthCookie
export const getApiKey = (cookieHeader: string | undefined) => {
  return getCookieValue(cookieHeader, 'apiKey')
}
export const voteSinger = (galaId: string, singerId: string, bearerToken: string, apiKey: string) => {
  return voteSingerUseCase.execute(galaId, singerId, bearerToken, apiKey)
}
