import React, { Component } from 'react'
import { tokenToPersonalData } from '../../../utils/account-worker'
import { connect } from 'react-redux'
import { setIsAuthenticatedValue, setUserData } from './UserPersonalData.action.jsx'
import { tokenWorker } from '../../../utils/token-worker'

class UserPersonalDataComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const self = this

    if (tokenWorker.haveToken())
      tokenToPersonalData()
        .then(result => {
          if (result.status == 200) {
            // console.log(result.data.personalData)
            self.props.setUserData(result.data)
            if (!self.props.isAuthenticated) self.props.setIsAuthenticatedValue(true)
          }
        })
        .catch(error => {
          tokenWorker.deleteTokenFromLocalStorage()
        })
    // .catch(e => console.warn(e))



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