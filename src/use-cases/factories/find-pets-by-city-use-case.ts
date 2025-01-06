import { PrismaPetsRepository } from '../../repositories/prisma/prisma-pets-repository'
import { FindPetsByCityUseCase } from '../find-pets-by-city'

export function makeFindPetsByCity() {
  const prismaPetsRepository = new PrismaPetsRepository()
  const findPetsByCityUseCase = new FindPetsByCityUseCase(prismaPetsRepository)

  return findPetsByCityUseCase
}
