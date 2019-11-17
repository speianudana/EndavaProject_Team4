import axios from 'axios'
import { adress } from '../../../../utils/server-adress.js'


export default class AccountData {
  constructor(statelessData) {
    this.firstName = statelessData.firstName
    this.lastName = statelessData.lastName
    this.username = statelessData.username
    this.email = statelessData.email
    this.password = statelessData.password
    this.passwordRepeat = statelessData.passwordRepeat

    this.error_msgs = new Array()
  }

  isValid() {
    let result = true
    this.error_msgs = new Array()

    if (this.password != this.passwordRepeat) {
      this.error_msgs.push('password != password repeat')
      result = false
    }

    return result;
  }



  registration() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      username: this.email
    }

    if (!this.isValid()) {

      console.log(this.error_msgs)
      alert('error: look at the console!!')
      return;
    }

    axios.post(`${adress}/api/auth/registration`, data).then(res => {
      if (res.status === 200) {
        alert(`Register success, look at the console!!`)
        console.log(res.data)
      }
    }).catch(function (error) {
      alert(`Register error!!!`)
    });
  }

}