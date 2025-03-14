import type { Singer } from '@/core/singers/domain/singer'

export interface SingerRepository {
  getAllSingers: () => Promise<Singer[]>
  getSinger: (id: string) => Promise<Singer | null>
}
