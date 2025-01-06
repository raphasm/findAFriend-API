import { Pet } from '@prisma/client'
import { IPetsRepository } from '../repositories/pets-repository'

interface ISearchPetsUseCaseRequest {
  query: string
  page: number
}

interface ISearchPetsUseCaseResponse {
  pets: Pet[]
}

export class FindPetsByCityUseCase {
  constructor(private petsRepository: IPetsRepository) {}

  async execute({
    query,
    page,
  }: ISearchPetsUseCaseRequest): Promise<ISearchPetsUseCaseResponse> {
    const pets = await this.petsRepository.findByCity(query, page)

    if (!pets) {
      throw new Error('your pet was not found')
    }

    return {
      pets,
    }
  }
}
