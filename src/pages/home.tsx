import GetUsuarios from '@/api/get-usuarios'
import Header from '@/components/header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useUserStore } from '@/store/user'
import { User } from '@/types'
import { SearchIcon, UserIcon } from 'lucide-react'
import { Fragment, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<User[]>([])
  const [usersFiltered, setUsersFiltered] = useState<User[]>([])

  const { user } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      return navigate('/')
    }

    const getUsuarios = async () => {
      const tipo = user.Tipo === 'Estilista' ? 'Atelie' : 'Estilista'
      const res = await GetUsuarios(tipo)

      const data: User[] = await res?.json()

      if (!res || !res.ok) {
        toast.error('Ocorreu um erro ao buscar usuários')

        return
      }

      if (data.length === 0) {
        toast.error('Nenhum usuário encontrado')

        return
      }

      setUsersFiltered(data)
      setUsers(data)
    }

    getUsuarios()
  }, [navigate, user])

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)

    const usersFiltered = users.filter(
      (usuario) =>
        usuario.Nome.toLowerCase().includes(value.toLowerCase()) ||
        usuario.Email.toLowerCase().includes(value.toLowerCase())
    )

    setUsersFiltered(usersFiltered)
  }

  if (!user) {
    return navigate('/')
  }

  return (
    <div className='w-full h-screen bg-neutral-100'>
      <Header />

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
          <CardHeader className='flex flex-row justify-between items-center'>
            <CardTitle className='text-xl'>
              {user.Tipo === 'Estilista'
                ? 'Ateliês disponíveis'
                : 'Estilistas disponíveis'}
            </CardTitle>

            <Button onClick={() => navigate('/schedules')}>Agendamentos</Button>
          </CardHeader>

          <CardContent>
            {usersFiltered.map((usuario, index) => (
              <Fragment key={usuario.UsuarioID}>
                <div className='flex items-center justify-between p-2'>
                  <div className='flex items-center space-x-4'>
                    <Avatar>
                      <AvatarImage src={usuario.Perfil?.FotoPerfil ?? ''} />

                      <AvatarFallback className='bg-neutral-200'>
                        {usuario.Nome[0].toUpperCase() ?? (
                          <UserIcon className='text-neutral-600' size={24} />
                        )}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className='text-lg font-semibold leading-6'>
                        {usuario.Nome}
                      </p>

                      <p className='text-sm text-neutral-500'>
                        {usuario.Email}
                      </p>
                    </div>
                  </div>

                  <p className='font-semibold uppercase text-sm text-neutral-600 mr-8'>
                    {usuario.Tipo}
                  </p>
                </div>

                {index !== usersFiltered.length - 1 && (
                  <Separator className='my-2' color='neutral-100' />
                )}
              </Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
