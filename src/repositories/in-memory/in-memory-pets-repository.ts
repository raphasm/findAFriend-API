// import { Prisma, Pet } from '@prisma/client'
// import { IPetsRepository } from '../pets-repository'
// import { randomUUID } from 'crypto'

// export class InMemoryPetsRepository implements IPetsRepository {
//   public items: Pet[] = []

//   async create(data: Prisma.PetUncheckedCreateInput) {
//     const pets = {
//       id: randomUUID(),
//       name: data.name,
//       description: data.description,
//       city: data.city,
//       age: data.age,
//       size: data.size,
//       energy: data.energy,
//       levelDependency: data.levelDependency,
//       habitatProperty: data.habitatProperty,
//       orgs_id: data.orgs_id,
//     }

//     this.items.push(pets)

//     return pets
//   }
//   async findByCity(query: string, page: number) {
//     return this.items
//       .filter((item) => item.user_Id === userId)
//       .slice((page - 1) * 20, page * 20)
//   }
//   async findByCharacteristics(query: string, page: number): {}
// }
