import React from 'react'
import RegistrationStateless from './Registration.stateless.jsx'
import axios from 'axios'
import { adress } from '../../../../utils/server-adress'
import RegistrationData from './RegistrationData.class'

export default class RegistrationStatefull extends React.Component {

  constructor(props) {
    super(props)
    this.handleBtnRegistr.bind(this)
  }



  handleBtnRegistr(regStatelessAccData) {
    const registrationData = new RegistrationData(regStatelessAccData)

    if (!registrationData.isValid()) {
      console.log(registrationData.error_msgs)
      alert('error: look at the console!!')
      return;
    }


    axios.post(`${adress}/api/auth/registration`, registrationData).then(res => {
      if (res.status === 200) {
        alert(`Register success, look at the console!!`)
        console.log(res.data)
      }
    }).catch(function (error) {
      alert(`Register error!!!`)
    });



  }

  render() {
    return (
      <div>
        <RegistrationStateless handleBtnRegistr={this.handleBtnRegistr} />
      </div>
    )
  }
}
