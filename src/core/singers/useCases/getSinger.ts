import type { Singer } from '@/core/singers/domain/singer'
import type { SingerRepository } from '@/core/singers/domain/singerRepository'

export class GetSinger {
  constructor(private singerRepository: SingerRepository) {}

  async execute(id: string): Promise<Singer | null> {
    return this.singerRepository.getSinger(id)
  }
}
