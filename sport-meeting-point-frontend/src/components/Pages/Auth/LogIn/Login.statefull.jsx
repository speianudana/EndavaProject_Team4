import React, { Component } from 'react'
import LoginStateless from './Login.stateless.jsx'
import axios from 'axios'
import { url } from '../../../../utils/server-url'
import { tokenWorker } from '../../../../utils/token-worker.js'
import { tokenToPersonalData } from '../../../../utils/account-worker'
import { connect } from 'react-redux'
import { setUserData, setIsAuthenticatedValue } from '../../../UserData/UserPersonalData/UserPersonalData.action.jsx'
import { Redirect } from 'react-router-dom'
import { index } from '../../../App/AppConstRoutes'
import PropTypes from 'prop-types'

class LoginStatefull extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirectToHome: false,
      errorMsg: ''
    }

    this.handleBtnLogIn.bind(this)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('z: ', this.state)
    // console.log('prev props :', prevProps)
    // console.log('current props :', this.props)
  }

  handleBtnLogIn(login, password) {
    const loginObject = {
      username: login,
      password: password
    }

    axios.post(`${url}/api/auth/login`, loginObject).then(res => {
      if (res.status === 200) {
        if (typeof res.data === 'string') {
          this.setState({ errorMsg: `*${res.data}` })
        } else {
          tokenWorker.saveTokenInLocalStorage(res.data.token)
          // console.log('afdafadfdafadf: ', res.data.token)
          tokenToPersonalData().then(
            result => {
              // console.log(result)
              this.props.setUserData(result.data)
              this.props.setIsAuthenticatedValue(true)
              this.setState({ redirectToHome: true })
            }
          )
        }
      }
    }).catch(function (error) {
      console.log('error: ', error)
    })
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to={index} />
    }

    return (
      <div>
        <LoginStateless
          onHandleBtnLogIn={(login, password) => this.handleBtnLogIn(login, password)}
          errorMsg={this.state.errorMsg}
        />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    email: state.userPersonalData.email,
    firstName: state.userPersonalData.firstName,
    lastName: state.userPersonalData.lastName
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

LoginStatefull.propTypes = {
  setUserData: PropTypes.func,
  setIsAuthenticatedValue: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginStatefull)
