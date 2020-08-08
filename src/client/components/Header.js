import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className='navbar-brand' to='/'>My cool app</Link>
          <Link to='/users'>Users</Link>
          <Link to='/admins'>Admins</Link>
          {
            this.props.auth
              ? <a href='/api/logout'>Logout</a>
              : <a href='/api/auth/google'>Login</a>
          }
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)

