export class SingerVote {
  id: string
  firstName: string
  lastName: string
  stageName: string
  photo: string
  totalVotes: number

  constructor(id: string, firstName: string, lastName: string, stageName: string, photo: string, totalVotes: number) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.stageName = stageName
    this.photo = photo
    this.totalVotes = totalVotes
  }
}

export interface SingerVoteAPI {
  id: string
  first_name: string
  last_name: string
  stage_name: string
  photo_url: string
  totalVotes: number
}
