export default async function DeleteSchedule(scheduleId: number) {
  try {
    const res = await fetch(
      `https://301a-143-208-41-236.ngrok-free.app/api/agendamentos/${scheduleId}`,
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
