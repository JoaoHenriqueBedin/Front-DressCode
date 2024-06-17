import { User } from '@/types'
import { UserIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from './ui/avatar'

import { Select, SelectTrigger } from '@radix-ui/react-select'
import { SelectContent } from './ui/select'
import { useState } from 'react'

export default function Header({ user }: { user: User | null }) {
  const [open, setOpen] = useState(false)

  const handleEditProfile = () => {
    setOpen(false)
    console.log('edit profile')
  }

  const handleLogout = () => {
    setOpen(false)
    console.log('logout')
  }

  return (
    <div className='bg-white shadow border-b-gray-200 border-b-1 h-12 flex justify-end items-center container'>
      <Select open={open} onOpenChange={setOpen}>
        <SelectTrigger className='mr-8'>
          <Avatar>
            {/* <AvatarImage src={user?.Perfil?.FotoPerfil ?? ''} /> */}

            <AvatarFallback className='bg-neutral-200'>
              {user?.Nome[0] ?? (
                <UserIcon className='text-neutral-600' size={24} />
              )}
            </AvatarFallback>
          </Avatar>
        </SelectTrigger>

        <SelectContent className='w-[180px]'>
          <div
            className='relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm hover:bg-accent'
            onClick={handleEditProfile}
          >
            Editar perfil
          </div>

          <div
            className='relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm hover:bg-accent'
            onClick={handleLogout}
          >
            Sair
          </div>
        </SelectContent>
      </Select>
    </div>
  )
}
