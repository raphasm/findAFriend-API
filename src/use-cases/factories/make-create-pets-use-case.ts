import { PrismaOrgsRepository } from '../../repositories/prisma/prisma-orgs-repository'
import { PrismaPetsRepository } from '../../repositories/prisma/prisma-pets-repository'
import { CreatePetsUseCase } from '../create-pets'

export function makeCreatePetsUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository()
  const prismaOrgsRepository = new PrismaOrgsRepository()

  const createPetsUseCase = new CreatePetsUseCase(
    prismaPetsRepository,
    prismaOrgsRepository,
  )

  return createPetsUseCase
}
