import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NotFoundPage extends Component {
  render() {
    this.props.staticContext.notFound = true
    return (
      <div>
        <h1>404 - Not found</h1>
      </div>
    )
  }
}

NotFoundPage.defaultProps = {
  staticContext: {}
}

NotFoundPage.propTypes = {
  staticContext: PropTypes.object
}

export default {
  component: NotFoundPage
}
