import { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(verifyUserRole: 'ADMIN' | 'MEMBER') {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { role } = request.user

    if (role !== verifyUserRole) {
      return reply.status(401).send({ message: 'Unauthorized' })
    }
  }
}
