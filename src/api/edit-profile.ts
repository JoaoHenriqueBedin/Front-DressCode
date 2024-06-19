import { User } from '@/types'

export default async function EditProfile(user: User) {
  try {
    const body = {
      Biografia: user.Perfil!.Biografia,
      FotoPerfil: user.Perfil!.FotoPerfil,
    }

    const res = await fetch(
      `https://301a-143-208-41-236.ngrok-free.app/api/usuarios/${user.UsuarioID}`,
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
