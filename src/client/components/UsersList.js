import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import PropTypes from 'prop-types'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers () {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  }

  render() {
    return (
      <div>
        Lista de usuarios
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

export function loadData (store) {
  return store.dispatch(fetchUsers())
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)
