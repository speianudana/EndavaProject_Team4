import React, { Component } from 'react'
import LoginStateless from './Login.stateless.jsx'
import LogInData from './LogInData.class'
import axios from 'axios'
import { adress } from '../../../../utils/server-adress'

export default class LoginStatefull extends Component {

  constructor(props) {
    super(props)
    this.handleBtnLogIn.bind(this)
  }


  handleBtnLogIn(login, password) {
    let logInObj = new LogInData(login, password)

    if (!logInObj.isValid()) {

      console.log(logInObj.error_msgs)
      alert('error: look at the console!!')
      return;
    }

    axios.post(`${adress}/api/auth/login`, logInObj).then(res => {
      if (res.status === 200) {
        alert(`LogIn success, look at the console!!`)
        console.log(res.data)
      }
    }).catch(function (error) {
      alert(`LogIn error!!!`)
    });

  }

  render() {
    return (
      <div>
        <LoginStateless handleBtnLogIn={this.handleBtnLogIn} />
      </div>
    )
  }
}
