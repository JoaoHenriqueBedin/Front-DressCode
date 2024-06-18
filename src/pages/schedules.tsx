import Header from '@/components/header'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useUserStore } from '@/store/user'

export default function SchedulesPage() {
  const { user } = useUserStore()

  if (!user) {
    return null
  }

  return (
    <div className='w-full h-screen bg-neutral-100'>
      <Header />

      <div className='w-full flex flex-col justify-center items-center container p-8'>
        <Card className='w-full max-w-3xl bg-white shadow'>
          <CardHeader className='flex flex-row justify-between items-center'>
            <CardTitle className='text-xl'>Meus Agendamentos</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
