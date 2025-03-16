import type { SingerVote } from '@/core/votes/domain/vote'
import type { VoteRepository } from '@/core/votes/domain/voteRepository'

/* eslint-disable @typescript-eslint/no-unused-vars */
export class HttpMockVoteRepository implements VoteRepository {
  async getVotesByGala(galaId: string): Promise<SingerVote[]> {
    return [
      {
        id: 'f86c39f9-4c6b-4b05-ac7d-d9a2894f19ce',
        firstName: 'Pancracio',
        lastName: 'Bermejo',
        stageName: 'Verpan 👀🥖',
        photo:
          'https://cdn.leonardo.ai/users/cc23204b-dcf8-4918-b5e0-37d7d3058bcd/generations/e7d55872-51c2-4730-b8f2-012b6dff1902/Leonardo_Phoenix_10_A_candid_highcontrast_photograph_of_a_rust_3.jpg?w=512',
        totalVotes: 2,
      },
      {
        id: '6cae7205-c32d-4c8e-806f-89650f798642',
        firstName: 'Pan',
        lastName: 'Bermejo',
        stageName: 'Pancito',
        photo:
          'https://cdn.leonardo.ai/users/cc23204b-dcf8-4918-b5e0-37d7d3058bcd/generations/e7d55872-51c2-4730-b8f2-012b6dff1902/Leonardo_Phoenix_10_A_candid_highcontrast_photograph_of_a_rust_3.jpg?w=512',
        totalVotes: 9,
      },
    ]
  }
}
