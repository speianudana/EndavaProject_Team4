import React from 'react'
import RegisterStateless from './Register.stateless.jsx'

class AccountData {
  constructor(statelessData) {
    this.firstName = statelessData.firstName
    this.lastName = statelessData.lastName
    this.username = statelessData.username
    this.email = statelessData.email
    this.password = statelessData.password
    this.passwordRepeat = statelessData.passwordRepeat
  }



}

export default class RegisterStatefull extends React.Component {

  constructor(props) {
    super(props)
    this.handleBtnRegistr.bind(this)
  }

  handleBtnRegistr(regStatelessAccData) {
    const accountData = new AccountData(regStatelessAccData)

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
