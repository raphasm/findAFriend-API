import { Prisma, Org } from '@prisma/client'
import { IOrgsRepository } from '../orgs-repository'
import { prisma } from '../../lib/prisma'

export class PrismaOrgsRepository implements IOrgsRepository {
  async create(data: Prisma.OrgUncheckedCreateInput) {
    const org = await prisma.org.create({
      data,
    })

    return org
  }

  async findById(id: string) {
    const org = await prisma.org.findUnique({
      where: {
        id,
      },
    })

    return org
  }

  async findAddress(address: string) {
    const org = await prisma.org.findFirst({
      where: {
        address,
      },
    })

    return org
  }

  async findByEmail(email: string) {
    const findEmail = await prisma.org.findUnique({
      where: {
        email,
      },
    })
    return findEmail
  }
}
