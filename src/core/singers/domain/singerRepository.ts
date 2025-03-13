import type { Singer } from './singer'

export interface SingerRepository {
  getAllSingers: () => Promise<Singer[]>
  getSinger: (id: string) => Promise<Singer | null>
}
