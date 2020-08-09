import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers () {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  }

  head () {
    return (
      <Helmet>
        <title>{`${this.props.users.length} users loaded`}</title>
        <meta property='og:title' content='SSR cool app' />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        <h1>Lista de usuarios</h1>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

UsersList.propTypes = {
  users: PropTypes.array,
  fetchUsers: PropTypes.func
}

function loadData (store) {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
}
