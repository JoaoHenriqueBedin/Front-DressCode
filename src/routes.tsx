import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login'
import RegisterPage from './pages/register'
import SchedulesPage from './pages/schedules'
import HomePage from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/home',
    // @ts-expect-error
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/schedules',
    element: <SchedulesPage />,
  },
])

export default router
