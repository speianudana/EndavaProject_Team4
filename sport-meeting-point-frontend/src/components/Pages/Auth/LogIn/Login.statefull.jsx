import React, { Component } from 'react'
import LoginStateless from './Login.stateless.jsx'
import axios from 'axios'
import { adress } from '../../../../utils/server-adress'
import { tokenWorker } from '../../../../utils/token-worker.js'

export default class LoginStatefull extends Component {

  constructor(props) {
    super(props)
    this.handleBtnLogIn.bind(this)
  }


  handleBtnLogIn(login, password) {
    const loginObject = {
      login: login,
      password: password
    }


    axios.post(`${adress}/api/auth/login`, loginObject).then(res => {
      if (res.status === 200) {
        tokenWorker.saveTokenInLocalStorage(res.data)


        //tokenWorker.saveTokenInLocalStorage(res.data)
        // console.log(tokenWorker.loadTokenFromLocalStorage())

      }
    }).catch(function (error) {
      console.log(error)
    });

  }

  render() {
    return (
      <div>
        <LoginStateless onHandleBtnLogIn={this.handleBtnLogIn} />
      </div>
    )
  }
}
