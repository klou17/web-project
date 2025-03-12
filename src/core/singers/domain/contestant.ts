export interface Singer {
  id: string
  firstName: string
  lastName: string
  stageName: string
  photo: string
  bio: string
  birthDate: Date
  active: boolean
}

export interface SingerDB {
  id: string
  first_name: string
  last_name: string
  stage_name: string
  photo_url: string
  bio: string
  birth_date: string
  active: boolean
}
