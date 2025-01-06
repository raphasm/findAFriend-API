import { IOrgsRepository } from '../repositories/orgs-repository'
import { IPetsRepository } from '../repositories/pets-repository'
import { Pet } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

// TODO: colocar validação se não encontrar o orgs_id

interface ICreatePetsUseCaseRequest {
  orgsId: string
  name: string
  description: string
  city: string
  age: string
  size: string
  energy: string
  levelDependency: string
  habitatProperty: string
}

interface ICreatePetsUseCaseResponse {
  pet: Pet
}

export class CreatePetsUseCase {
  constructor(
    private petsRepository: IPetsRepository,
    private orgsRepository: IOrgsRepository,
  ) {}

  async execute({
    name,
    description,
    city,
    age,
    size,
    energy,
    levelDependency,
    habitatProperty,
    orgsId,
  }: ICreatePetsUseCaseRequest): Promise<ICreatePetsUseCaseResponse> {
    const findOrgId = await this.orgsRepository.findById(orgsId)

    if (!findOrgId) {
      throw new ResourceNotFoundError()
    }

    const pet = await this.petsRepository.create({
      orgs_id: findOrgId.id,
      name,
      description,
      city,
      age,
      size,
      energy,
      levelDependency,
      habitatProperty,
    })

    return {
      pet,
    }
  }
}
