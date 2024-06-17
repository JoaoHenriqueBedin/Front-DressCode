export default async function GetUsuarios(tipo: 'Estilista' | 'Atelie') {
  try {
    const res = await fetch(
      `https://17b2-143-208-41-236.ngrok-free.app/api/usuarios/search/${tipo}`
    )

    return res
  } catch (error) {
    console.log(error)
  }
}
