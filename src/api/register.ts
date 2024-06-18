export interface UserRegister {
  Nome: string
  Email: string
  Senha: string
  CPF_CNPJ: string
  Telefone: string
  Tipo: string
}

export default async function RegisterRequest(user: UserRegister) {
  try {
    if (!user) {
      throw new Error('User data is required')
    }

    const res = await fetch(
      'https://b12a-143-208-41-236.ngrok-free.app/api/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    )

    return res
  } catch (error) {
    console.error(error)
  }
}
