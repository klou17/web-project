import { configuration } from '@/core/share/configuration'
import { Singer, type SingerAPI } from '@/core/singers/domain/singer'
import type { SingerRepository } from '@/core/singers/domain/singerRepository'

export class HttpSingerRepository implements SingerRepository {
  private API_URL = `${configuration().BASE_URL}/singers`

  async getAllSingers(): Promise<Singer[]> {
    const response = await fetch(`${this.API_URL}/all`)
    const data = await response.json()
    return data.map((singer: SingerAPI) => {
      const date = new Date(singer.birth_date)

      return new Singer(
        singer.id,
        singer.first_name,
        singer.last_name,
        singer.stage_name,
        singer.photo_url,
        singer.bio,
        date,
        singer.active,
      )
    })
  }

  async getSinger(id: string): Promise<Singer | null> {
    const response = await fetch(`${this.API_URL}/${id}`)

    const singer: SingerAPI = await response.json()
    const date = new Date(singer.birth_date)

    return new Singer(
      singer.id,
      singer.first_name,
      singer.last_name,
      singer.stage_name,
      singer.photo_url,
      singer.bio,
      date,
      singer.active,
    )
  }
}
