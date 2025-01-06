import { Prisma, Org } from '@prisma/client'

export interface IOrgsRepository {
  create(data: Prisma.OrgCreateInput): Promise<Org>
  findByEmail(email: string): Promise<Org | null>
  findAddress(address: string): Promise<Org | null>
  findById(id: string): Promise<Org | null>
}
