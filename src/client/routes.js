import home from './pages/HomePage'
import users from './pages/UsersPage'
import admins from './pages/AdminsPage'
import app from './App'
import notFound from './pages/NotFoundPage'

const routes = [
  {
    ...app,
    routes: [
      {
        ...home,
        path: '/',
        exact: true
      },
      {
        ...users,
        path: '/users',
      },
      {
        ...admins,
        path: '/admins',
      },
      {
        ...notFound,
      }
    ]
  },
]

export default routes
