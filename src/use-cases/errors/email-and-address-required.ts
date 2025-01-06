export class EmailAndAddressRequired extends Error {
  constructor() {
    super('email and address is required.')
  }
}
