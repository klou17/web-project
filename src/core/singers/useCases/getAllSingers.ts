import type { Singer } from '@/core/singers/domain/singer'
import type { SingerRepository } from '@/core/singers/domain/singerRepository'

export class GetAllSingers {
  constructor(private singerRepository: SingerRepository) {}

  async execute(): Promise<Singer[]> {
    return this.singerRepository.getAllSingers()
  }
}
