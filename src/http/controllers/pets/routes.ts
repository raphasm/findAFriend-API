import { FastifyInstance } from 'fastify'
import { createPets } from './create-pets'
import { findByCity } from './find-by-city'
import { verifyUserRole } from '../../middlewares/verify-user-role'
import { verifyJWT } from '../../middlewares/verify-jwt'

export async function petsRoutes(app: FastifyInstance) {
  app.post(
    '/orgs/:orgId/register',
    { onRequest: [verifyJWT, verifyUserRole('ADMIN')] },
    createPets,
  )
  app.get('/pets/list', findByCity)
}
