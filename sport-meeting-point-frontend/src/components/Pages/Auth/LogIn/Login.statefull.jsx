import React, { Component } from 'react'
import LoginStateless from './Login.stateless.jsx'
import LogInData from './LogInData.class'

export default class LoginStatefull extends Component {

  constructor(props) {
    super(props)
    this.handleBtnLogIn.bind(this)
  }


  handleBtnLogIn(login, password) {
    let logInObj = new LogInData(login, password)
    logInObj.logIn()

  }

  render() {
    return (
      <div>
        <LoginStateless handleBtnLogIn={this.handleBtnLogIn} />
      </div>
    )
  }
}
