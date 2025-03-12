import type { Singer } from '../domain/singer'
import type { SingerRepository } from '../domain/singerRepository'

export class GetAllSingers {
  constructor(private singerRepository: SingerRepository) {}

  async execute(): Promise<Singer[]> {
    return this.singerRepository.getAllSingers()
  }
}
