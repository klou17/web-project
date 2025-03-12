import type { Singer } from '../domain/singer'
import type { SingerRepository } from '../domain/singerRepository'

export class GetSinger {
  constructor(private singerRepository: SingerRepository) {}

  async execute(id: string): Promise<Singer | null> {
    return this.singerRepository.getSinger(id)
  }
}
