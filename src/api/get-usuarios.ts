export default async function GetUsuarios(tipo: 'Estilista' | 'Atelie') {
  try {
    const res = await fetch(
      `https://b12a-143-208-41-236.ngrok-free.app/api/usuarios/search/${tipo}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return res
  } catch (error) {
    console.log(error)
  }
}
