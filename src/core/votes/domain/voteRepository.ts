import type { SingerVote } from '@/core/votes/domain/vote'

export interface VoteRepository {
  getVotesByGala: (galaId: string) => Promise<SingerVote[]>
  voteSinger: (galaId: string, singerId: string, bearerToken: string) => Promise<void>
}
