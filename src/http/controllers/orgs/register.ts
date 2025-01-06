import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeRegisterUseCase } from '../../../use-cases/factories/make-register-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    owner: z.string(),
    email: z.string().email(),
    cep: z.string().min(9),
    address: z.string(),
    phone: z.string(),
    password: z.string().min(6),
  })

  const { owner, email, cep, address, phone, password } =
    registerBodySchema.parse(request.body)

  const registerUseCase = makeRegisterUseCase()

  await registerUseCase.execute({
    owner,
    email,
    cep,
    address,
    phone,
    password,
  })

  return reply.status(201).send()
}
