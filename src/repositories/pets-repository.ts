import { Prisma, Pet } from '@prisma/client'

export interface IPetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findByCity(query: string, page: number): Promise<Pet[]>
  findByCharacteristics(query: string, page: number): Promise<Pet[]>
}
