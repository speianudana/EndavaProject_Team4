import React, { Component } from 'react'
import LoginStateless from './Login.stateless.jsx'
import axios from 'axios'
import { adress } from '../../../../utils/server-adress'
import { tokenWorker } from '../../../../utils/token-worker.js'
import { tokenToPersonalData } from '../../../../utils/account-worker'
import { connect } from 'react-redux'
import { setUserData } from '../../../UserData/UserPersonalData/UserPersonalData.action.jsx'

class LoginStatefull extends Component {

  constructor(props) {
    super(props)
    // console.log(props)


    this.handleBtnLogIn.bind(this)
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     console.log(this.props)
  //   }, 1500)
  // }

  componentDidUpdate() {

    console.log(this.props)
  }

  handleBtnLogIn(login, password) {


    const loginObject = {
      username: login,
      password: password
    }


    axios.post(`${adress}/api/auth/login`, loginObject).then(res => {
      if (res.status === 200) {
        tokenWorker.saveTokenInLocalStorage(res.data)
        tokenToPersonalData().then(
          result => {
            this.props.setUserData(result)
          }
        );


      }
    }).catch(function (error) {
      console.log('error: ', error)
    });

  }

  render() {
    return (
      <div>
        <LoginStateless onHandleBtnLogIn={(login, password) => this.handleBtnLogIn(login, password)} />

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
    setUserData: (email) => {
      dispatch(setUserData(email))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginStatefull)
