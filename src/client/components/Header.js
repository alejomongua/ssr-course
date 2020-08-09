import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container'>
            <Link className='navbar-brand' to='/'>My cool app</Link>
            <Link className='nav-item nav-link text-light' to='/users'>Users</Link>
            <Link className='nav-item nav-link text-light' to='/admins'>Admins</Link>
            {
              this.props.auth
              ? <a className='nav-item nav-link text-light' href='/api/logout'>Logout</a>
              : <a className='nav-item nav-link text-light' href='/api/auth/google'>Login</a>
            }
          </div>
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

