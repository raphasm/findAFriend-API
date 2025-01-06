import { Pet } from '@prisma/client'
import { IPetsRepository } from '../repositories/pets-repository'

// TODO fazer a rota http do caso de uso
interface FindPetsByCharacteristicsRequest {
  query: string
  page: number
}

interface FindPetsByCharacteristicsResponse {
  pets: Pet[]
}

export class FindPetsByCharacteristics {
  constructor(private petsRepository: IPetsRepository) {}

  async execute({
    query,
    page,
  }: FindPetsByCharacteristicsRequest): Promise<FindPetsByCharacteristicsResponse> {
    const pets = await this.petsRepository.findByCharacteristics(query, page)

    if (!pets) {
      throw new Error('your pet was not found')
    }

    return {
      pets,
    }
  }
}
