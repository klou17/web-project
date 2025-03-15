import { configuration } from '@/core/share/configuration'
import type { SingerVote } from '@/core/votes/domain/vote'
import type { VoteRepository } from '@/core/votes/domain/voteRepository'

export class HttpVoteRepository implements VoteRepository {
  private API_URL = `${configuration().BASE_URL}/votes`

  async getVotesByGala(galaId: string): Promise<SingerVote[]> {
    // const response = await fetch(`${this.API_URL}/votes-by-gala/${galaId}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization:
    //       'Token eyJhbGciOiJIUzI1NiIsImtpZCI6IjJsUzlDa2t0dkpCdkVZa04iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3Z1Y25yaG9yeHJydXhsc2F1bXhvLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJiNWQ5YjU2ZS0yNzMyLTQ2OWItYjVmNy1hMmZjMTcwNTM3YmIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyMDY1MTg5LCJpYXQiOjE3NDIwNjE1ODksImVtYWlsIjoicmdtNzQ1QGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJyZ203NDVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiYjVkOWI1NmUtMjczMi00NjliLWI1ZjctYTJmYzE3MDUzN2JiIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDIwNjE1ODl9XSwic2Vzc2lvbl9pZCI6ImZlODk0NzViLWNmMGYtNDBmMC1iZmIwLWRlOGZiMzhmMmQzNyIsImlzX2Fub255bW91cyI6ZmFsc2V9.hBrVPI8XEPnTnz7MTpnUvN0h5dxI-YR7ZAqf0thm88c',
    //   },
    // })

    // const data = await response.json()
    // return data.map((singer: SingerVoteAPI) => {
    //   return new SingerVote(
    //     singer.id,
    //     singer.first_name,
    //     singer.last_name,
    //     singer.stage_name,
    //     singer.photo_url,
    //     singer.totalVotes,
    //   )
    // })

    return [
      {
        id: 'f86c39f9-4c6b-4b05-ac7d-d9a2894f19ce',
        firstName: 'Pancracio',
        lastName: 'bermejo',
        stageName: 'verpan',
        photo:
          'https://cdn.leonardo.ai/users/cc23204b-dcf8-4918-b5e0-37d7d3058bcd/generations/e7d55872-51c2-4730-b8f2-012b6dff1902/Leonardo_Phoenix_10_A_candid_highcontrast_photograph_of_a_rust_3.jpg?w=512',
        totalVotes: 2,
      },
      {
        id: 'f86c39f9-4c6b-4b05-ac7d-d9a2894f13ce',
        firstName: 'Pancracio',
        lastName: 'bermejo',
        stageName: 'verpa222',
        photo:
          'https://cdn.leonardo.ai/users/cc23204b-dcf8-4918-b5e0-37d7d3058bcd/generations/e7d55872-51c2-4730-b8f2-012b6dff1902/Leonardo_Phoenix_10_A_candid_highcontrast_photograph_of_a_rust_3.jpg?w=512',
        totalVotes: 9,
      },
    ]
  }
}
