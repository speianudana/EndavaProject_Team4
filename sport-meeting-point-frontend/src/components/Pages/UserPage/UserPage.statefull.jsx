import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserPageStateless from './UserPage.stateless.jsx'
import { connect } from 'react-redux'
import { setUserData, setIsAuthenticatedValue } from '../../UserData/UserPersonalData/UserPersonalData.action.jsx'
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
      <UserPageStateless signOut={() => this.signOut()} />
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    setIsAuthenticatedValue: (boolValue) => {
      dispatch(setIsAuthenticatedValue(boolValue))
    }
  }
}



export default connect(() => ({}), mapDispatchToProps)(UserPageStatefull)