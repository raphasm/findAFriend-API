import { Org } from '@prisma/client'
import { IOrgsRepository } from '../repositories/orgs-repository'

import { hash } from 'bcryptjs'
import { EmailAlreadyExists } from './errors/email-already-exists'
// import { EmailAndAddressRequired } from './errors/email-and-address-required'

// COLOCAR EM UM TRY CATH PARA FORMATAR O ERRO

interface IOrgsUseCaseRequest {
  owner: string
  email: string
  password: string
  cep: string
  address: string
  phone: string
}

interface IOrgsUseCaseResponse {
  org: Org
}

export class RegisterUseCase {
  constructor(private orgsRepository: IOrgsRepository) {}

  async execute({
    owner,
    email,
    password,
    cep,
    address,
    phone,
  }: IOrgsUseCaseRequest): Promise<IOrgsUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const findEmail = await this.orgsRepository.findByEmail(email)

    if (findEmail) {
      throw new EmailAlreadyExists()
    }

    // const isAddressAndEmailExists = await this.orgsRepository.findAddress(
    //   address,
    // )

    // if (!isAddressAndEmailExists) {
    //   throw new EmailAndAddressRequired()
    // }

    const org = await this.orgsRepository.create({
      owner,
      email,
      password: password_hash,
      cep,
      address,
      phone,
    })

    return {
      org,
    }
  }
}
