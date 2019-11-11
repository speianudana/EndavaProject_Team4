import React from 'react'
import RegisterStateless from './Register.stateless.jsx'
import axios from 'axios'
import { adress } from '../../../../utils/server-adress.js'

class AccountData {
  constructor(statelessData) {
    this.firstName = statelessData.firstName
    this.lastName = statelessData.lastName
    this.username = statelessData.username
    this.email = statelessData.email
    this.password = statelessData.password
    this.passwordRepeat = statelessData.passwordRepeat
  }

  isValid() {
    return true;
  }


  sendToServer() {
    const data1 = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }

    axios.post(`${adress}/account/register`, data1).then(res => {
      if (res.status === 200) {
        alert(`Register success!!!`)
      }
    }).catch(function (error) {
      alert(`Register error!!!`)
    });
  }

}

export default class RegisterStatefull extends React.Component {

  constructor(props) {
    super(props)
    this.handleBtnRegistr.bind(this)
  }


  handleBtnRegistr(regStatelessAccData) {
    const accountData = new AccountData(regStatelessAccData)
    if (accountData.isValid()) accountData.sendToServer();


    console.log(accountData)
  }

  render() {
    return (
      <div>
        <RegisterStateless handleBtnRegistr={this.handleBtnRegistr} />
      </div>
    )
  }
}
