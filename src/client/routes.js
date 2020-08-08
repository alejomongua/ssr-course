import home from './pages/HomePage'
import users from './pages/UsersPage'

const routes = [
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

export default routes
