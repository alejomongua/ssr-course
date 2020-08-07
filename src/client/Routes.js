import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'

const Router = () => {
  return (
    <div>
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  )
}

export default Router
