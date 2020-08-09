import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import PropTypes from 'prop-types'
import requireAuth from '../components/hocs/requireAuth'

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins () {
    return this.props.admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ))
  }

  render() {
    return (
      <div>
        <h1>Lista de administradores</h1>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { admins: state.admins }
}

AdminsList.propTypes = {
  admins: PropTypes.array,
  fetchAdmins: PropTypes.func
}

function loadData (store) {
  return store.dispatch(fetchAdmins())
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminsList)),
}
