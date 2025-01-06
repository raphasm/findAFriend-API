import { Prisma, Pet } from '@prisma/client'
import { IPetsRepository } from '../pets-repository'
import { prisma } from '../../lib/prisma'

export class PrismaPetsRepository implements IPetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    const pets = await prisma.pet.create({
      data,
    })

    return pets
  }

  async findByCity(query: string, page: number) {
    const pets = await prisma.pet.findMany({
      where: {
        city: {
          contains: String(query),
          mode: 'insensitive',
        },
      },
      // take: 20,
      // skip: (page - 1) * 20,
    })

    return pets
  }

  async findByCharacteristics(query: string, page: number) {
    const pets = await prisma.pet.findMany({
      where: {
        levelDependency: {
          contains: query,
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return pets
  }
}
