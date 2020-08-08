import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'
import Header from './components/Header'
import { fetchCurrentUser } from './actions'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

App.propTypes = {
  route: PropTypes.object
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}
