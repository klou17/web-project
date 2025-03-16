import { configuration } from '@/core/share/configuration'
import { type SingerVoteAPI, SingerVote } from '@/core/votes/domain/vote'
import type { VoteRepository } from '@/core/votes/domain/voteRepository'

export class HttpVoteRepository implements VoteRepository {
  private API_URL = `${configuration().BASE_URL}/votes`

  async getVotesByGala(galaId: string): Promise<SingerVote[]> {
    const response = await fetch(`${this.API_URL}/votes-by-gala/${galaId}`)

    const data = await response.json()
    return data.map((singer: SingerVoteAPI) => {
      return new SingerVote(
        singer.id,
        singer.first_name,
        singer.last_name,
        singer.stage_name,
        singer.photo_url,
        singer.totalVotes,
      )
    })
  }
}
