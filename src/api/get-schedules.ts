interface GetSchedulesProps {
  tipo: string | undefined
  id: number | undefined
}

export default async function GetSchedules({ tipo, id }: GetSchedulesProps) {
  try {
    const res = await fetch(
      `https://301a-143-208-41-236.ngrok-free.app/api/agendamentos/${tipo}/${id}`,
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
