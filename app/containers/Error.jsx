import React from 'react'
import { connect } from 'react-redux'

const Error = ({ error }) => {
  return (
    <p>
      {
        error ? <font color="red">{error}</font> : null
      }
    </p>
  )
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default connect(
  mapStateToProps,
)(Error)
