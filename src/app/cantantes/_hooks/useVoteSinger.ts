import { getAuthCookie } from '@/core/auth/useCases/getAuthCookie'
import { HttpVoteRepository } from '@/core/votes/infastructure/HttpVoteRepository'
import { VoteSinger } from '@/core/votes/useCases/voteSinger'

export class VoteHook {
  private voteRepository: HttpVoteRepository
  private voteSingerUseCase: VoteSinger

  constructor() {
    this.voteRepository = new HttpVoteRepository()
    this.voteSingerUseCase = new VoteSinger(this.voteRepository)
  }

  public getAuthToken(): string | undefined {
    return getAuthCookie()
  }
  public voteSinger(galaId: string, singerId: string, bearerToken: string) {
    return this.voteSingerUseCase.execute(galaId, singerId, bearerToken)
  }
}
