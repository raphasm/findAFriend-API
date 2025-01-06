import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeFindPetsByCity } from '../../../use-cases/factories/find-pets-by-city-use-case'

export async function findByCity(request: FastifyRequest, reply: FastifyReply) {
  const findByCityBodySchema = z.object({
    query: z.coerce.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { query, page } = findByCityBodySchema.parse(request.query)

  const findPetsByCityUseCase = makeFindPetsByCity()

  const { pets } = await findPetsByCityUseCase.execute({
    query,
    page,
  })

  return reply.status(200).send({
    pets,
  })
}
