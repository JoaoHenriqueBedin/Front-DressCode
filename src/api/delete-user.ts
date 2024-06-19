export default async function DeleteUser(userId: number) {
  try {
    const res = await fetch(
      `https://301a-143-208-41-236.ngrok-free.app/api/usuarios/${userId}`,
      {
        method: 'DELETE',
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
