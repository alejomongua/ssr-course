import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

export default (ChildComponent) => {
  class RequireAuth extends Component {

    render () {
      switch (this.props.auth) {
        case false:
          return <Redirect to='/' />
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props} />
      }
    }
  }

  RequireAuth.propTypes = {
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
  }

  function mapStateToProps ({ auth }) {
    return { auth }
  }
  
  return connect(mapStateToProps)(RequireAuth)
}
