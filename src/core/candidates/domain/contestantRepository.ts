import type { Contestant } from './contestant'

export interface ContestantRepository {
  getAll: () => Contestant[]
  getContestant: (id: string) => Contestant | undefined
}
