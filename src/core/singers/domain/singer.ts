export class Singer {
  id: string
  firstName: string
  lastName: string
  stageName: string
  photo: string
  bio: string
  birthDate: Date
  active: boolean

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    stageName: string,
    photo: string,
    bio: string,
    birthDate: Date,
    active: boolean,
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.stageName = stageName
    this.photo = photo
    this.bio = bio
    this.birthDate = birthDate
    this.active = active
  }
}

export interface SingerAPI {
  id: string
  first_name: string
  last_name: string
  stage_name: string
  photo_url: string
  bio: string
  birth_date: string
  active: boolean
}
