import GetUsuarios from '@/api/get-usuarios'
import Header from '@/components/header'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useUserStore } from '@/store/user'
import { SearchIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const { user } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    // if (!user) {
    //   return navigate('/')
    // }

    const getUsuarios = async () => {
      const res = await GetUsuarios(user?.Tipo ?? 'Estilista')

      const data = await res?.json()

      console.log(data)
    }

    getUsuarios()
  }, [navigate, user])

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className='w-full h-screen bg-neutral-100'>
      <Header user={user} />

      <div className='w-full flex flex-col justify-center items-center space-y-8 container p-8'>
        <div className='relative w-full max-w-md'>
          <SearchIcon className='absolute top-1/2 left-2.5 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400' />

          <Input
            value={search}
            onChange={handleChangeSearch}
            className='pl-8'
            placeholder='Search'
          />
        </div>

        <Card className='w-full max-w-3xl bg-white shadow'>
          <CardHeader>
            <CardTitle>Menu</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
