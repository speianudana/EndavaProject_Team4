import React from 'react'
import RegisterStateless from './Register.stateless.jsx'

import AccountData from './AccountData.class'

export default class RegisterStatefull extends React.Component {

  constructor(props) {
    super(props)
    this.handleBtnRegistr.bind(this)
  }


  handleBtnRegistr(regStatelessAccData) {
    const accountData = new AccountData(regStatelessAccData)
    accountData.registration();


  }

  render() {
    return (
      <div>
        <RegisterStateless handleBtnRegistr={this.handleBtnRegistr} />
      </div>
    )
  }
}
