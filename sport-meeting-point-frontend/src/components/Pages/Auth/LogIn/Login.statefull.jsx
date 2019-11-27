import React, { Component } from 'react'
import LoginStateless from './Login.stateless.jsx'
import axios from 'axios'
import { adress } from '../../../../utils/server-adress'
import { tokenWorker } from '../../../../utils/token-worker.js'
import { tokenToPersonalData } from '../../../../utils/account-worker'

export default class LoginStatefull extends Component {

  constructor(props) {
    super(props)
    this.handleBtnLogIn.bind(this)
  }


  handleBtnLogIn(login, password) {
    const loginObject = {
      username: login,
      password: password
    }


    axios.post(`${adress}/api/auth/login`, loginObject).then(res => {
      if (res.status === 200) {
        tokenWorker.saveTokenInLocalStorage(res.data)

        tokenToPersonalData().then(a => console.log(a));


      }
    }).catch(function (error) {
      console.log('error: ', error)
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
