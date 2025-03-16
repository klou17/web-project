import type { SingerVote } from '@/core/votes/domain/vote'
import type { VoteRepository } from '@/core/votes/domain/voteRepository'

export class GetVotesByGala {
  constructor(private voteRepository: VoteRepository) {}

  async execute(galaId: string): Promise<SingerVote[]> {
    return this.voteRepository.getVotesByGala(galaId)
  }
}
