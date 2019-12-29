import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserPageStateless from './UserPage.stateless.jsx'
import { connect } from 'react-redux'
import { logout } from '../../../redux/actions/Authentication.actions'

class UserPageStatefull extends Component {
  componentDidMount () {
    // console.log(this.props)
  }

  render () {
    return (
      <UserPageStateless
        signOut={() => this.props.logOut()}
        email={this.props.email}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        role={this.props.role}
        dateOfBirth={this.props.dateOfBirth}
      />
    )
  }
}

const mapStateToPops = state => ({
  email: state.authenticationData.email,
  firstName: state.authenticationData.firstName,
  lastName: state.authenticationData.lastName,
  dateOfBirth: state.authenticationData.dateOfBirth,
  role: state.authenticationData.role
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout())
})

UserPageStatefull.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  dateOfBirth: PropTypes.string,
  logOut: PropTypes.func
}

export default connect(mapStateToPops, mapDispatchToProps)(UserPageStatefull)
