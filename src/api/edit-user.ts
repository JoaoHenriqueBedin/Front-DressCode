import { User } from '@/types'

export default async function EditUser(user: User) {
  try {
    const body = {
      Nome: user.Nome,
      Email: user.Email,
      Telefone: user.Telefone,
    }

    const res = await fetch(
      `https://b12a-143-208-41-236.ngrok-free.app/api/usuarios/${user.UsuarioID}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )

    return res
  } catch (error) {
    console.log(error)
  }
}
