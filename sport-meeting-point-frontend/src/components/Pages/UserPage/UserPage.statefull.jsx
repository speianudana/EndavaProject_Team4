import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserPageStateless from './UserPage.stateless.jsx'
import { connect } from 'react-redux'
import { setIsAuthenticatedValue } from '../../UserData/UserPersonalData/UserPersonalData.action.jsx'
import { tokenWorker } from '../../../utils/token-worker'

class UserPageStatefull extends Component {
  constructor(props) {
    super(props)
    this.signOut.bind(this)
  }

  signOut() {
    this.props.setIsAuthenticatedValue(false)
    tokenWorker.deleteTokenFromLocalStorage()
  }

  render() {
    return (
      <UserPageStateless
        signOut={() => this.signOut()}
        email={this.props.email}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        role={this.props.role}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.userPersonalData.email,
    firstName: state.userPersonalData.firstName,
    lastName: state.userPersonalData.lastName,
    role: state.userPersonalData.role
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setIsAuthenticatedValue: (boolValue) => {
      dispatch(setIsAuthenticatedValue(boolValue))
    }
  }
}

UserPageStatefull.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  setIsAuthenticatedValue: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageStatefull)
