import type { VoteRepository } from '@/core/votes/domain/voteRepository'

export class VoteSinger {
  constructor(private voteRepository: VoteRepository) {}

  async execute(galaId: string, singerId: string, bearerToken: string): Promise<void> {
    return this.voteRepository.voteSinger(galaId, singerId, bearerToken)
  }
}
