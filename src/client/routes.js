import home from './pages/HomePage'
import users from './pages/UsersPage'
import app from './App'

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
      }
    ]
  },
]

export default routes
