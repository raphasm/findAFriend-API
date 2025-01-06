### Regras da aplicação

- Deve ser possível cadastrar um pet [ong] [x]
- Deve ser possível se cadastrar como uma ORG [ong] [x]
- Deve ser possível realizar login como uma ORG [ong]

- Deve ser possível listar todos os pets disponíveis para adoção em uma cidade [user] TODO
- Deve ser possível filtrar pets por suas características [user] TODO
- Deve ser possível visualizar detalhes de um pet para adoção [user] TODO

### Regras de negócio

- Para listar os pets, obrigatoriamente precisamos informar a cidade [user] TODO
- Uma ORG precisa ter um endereço e um número de WhatsApp [ong] TODO
- Um pet deve estar ligado a uma ORG [ong] [X]
- O usuário que quer adotar, entrará em contato com a ORG via WhatsApp TODO
- Todos os filtros, além da cidade, são opcionais
- Para uma ORG acessar a aplicação como admin, ela precisa estar logada [ong] TODO

- Uma org só pode cadastrar um pet se estiver logada

enum

model Ong {
id
owner

email
password

cep
address
phone
}

model Pet {
id
name nome do pet
description descrição do pet
city cidade do pet
age filhote/adulto
size tamanho pequeno/grande

energy numero de 0 a 4

levelDependency: nível de companhia
habitatProperty: ambiente grande ou pequeno

relação 1 - n : 1 ong = vários pets
}

model User {
id
location
}
