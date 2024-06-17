export default async function LoginRequest(email: string, password: string) {
  try {
    const body = {
      Email: email,
      Senha: password,
    }

    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Erro ao fazer login')
    }

    const data = await res.json()

    return data
  } catch (error) {
    console.error(error)
    throw error // Para propagar o erro e lidar com ele no componente
  }
}
