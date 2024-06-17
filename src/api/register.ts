export default async function RegisterRequest({
  Nome,
  Email,
  Senha,
  CPF_CNPJ,
  Telefone,
  Tipo,
}: {
  Nome: string;
  Email: string;
  Senha: string;
  CPF_CNPJ: string;
  Telefone: string;
  Tipo: string;
}) {
  try {
    const body = {
      Nome,
      Email,
      Senha,
      CPF_CNPJ,
      Telefone,
      Tipo,
    }

    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error('Erro ao fazer cadastro')
    }

    const data = await res.json()

    return data
  } catch (error) {
    console.error(error)
    throw error // Para propagar o erro e lidar com ele no componente
  }
}
