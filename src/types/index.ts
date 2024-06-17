export interface User {
  nome: string
  sobrenome: string
  cpf: string | null
  cnpj: string | null
  telefone: string
  email: string
  senha: string
  tipo: 'Atelie' | 'Estilista'
}
