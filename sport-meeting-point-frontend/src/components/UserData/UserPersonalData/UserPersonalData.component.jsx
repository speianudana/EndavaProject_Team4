import React, { Component } from 'react'
import { tokenWorker } from '../../../utils/token-worker'
import { tokenToPersonalData } from '../../../utils/account-worker'
import { connect } from 'react-redux'
import { setIsAuthenticatedValue, setUserData } from './UserPersonalData.action.jsx'

class UserPersonalDataComponent extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  componentDidMount() {

    if (tokenWorker.haveToken()) {
      tokenToPersonalData().then(data => {
        this.props.setUserData(data)

        if (!this.props.isAuthenticated) this.props.setIsAuthenticatedValue(true)
        // console.log(data)
      }).catch(console.warn('token is invalid'))
    }

    // this.timer = setInterval(() => {
    //   if (tokenWorker.haveToken()) {
    //     tokenWorker.sendTokenToServerAndCheckIfIsValid().then(a => {
    //       //do
    //     }).catch((error) => {
    //       if (this.props.isAuthenticated) this.props.setIsAuthenticatedValue(false)
    //       tokenWorker.deleteTokenFromLocalStorage()
    //     })
    //   }

    // }, 3000)
  }

  shouldComponentUpdate(nextProps, nextState) {


    // console.log(nextProps)
    return false
  }

  componentWillUnmount() {
    this.timer = clearInterval(this.timer)//return undefined
  }

  componentDidUpdate(prevProps, prevState) {
    //impossible  beacuse this hook is called after shouldComponentUpdate
  }



  render() {
    return (
      <>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    email: state.userPersonalData.email,
    firstName: state.userPersonalData.firstName,
    lastName: state.userPersonalData.lastName,
    isAuthenticated: state.userPersonalData.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUserData: (data) => {
      dispatch(setUserData(data))
    },
    setIsAuthenticatedValue: (boolValue) => {
      dispatch(setIsAuthenticatedValue(boolValue))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPersonalDataComponent)