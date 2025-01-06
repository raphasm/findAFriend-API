import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreatePetsUseCase } from '../../../use-cases/factories/make-create-pets-use-case'

export async function createPets(request: FastifyRequest, reply: FastifyReply) {
  const createPetsBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    city: z.string(),
    age: z.string().length(1),
    size: z.string(),
    energy: z.string().length(1),
    levelDependency: z.string(),
    habitatProperty: z.string(),
  })

  const createOrgsParamsSchema = z.object({
    orgsId: z.string().uuid(),
  })

  const { orgsId } = createOrgsParamsSchema.parse(request.params)

  const {
    name,
    description,
    city,
    age,
    size,
    energy,
    levelDependency,
    habitatProperty,
  } = createPetsBodySchema.parse(request.body)

  const createPetsUseCase = makeCreatePetsUseCase()

  await createPetsUseCase.execute({
    orgsId,
    name,
    description,
    city,
    age,
    size,
    energy,
    levelDependency,
    habitatProperty,
  })

  return reply.status(201).send(createPetsUseCase)
}
