import Home from './components/Home'
import UsersList, { loadData } from './components/UsersList'

const routes = [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: UsersList,
    path: '/users',
    loadData
  }
]

export default routes
