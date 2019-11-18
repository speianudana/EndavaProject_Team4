import axios from 'axios'
import { adress } from '../../../../utils/server-adress'


export default class LogInData {

  constructor(username, password) {
    this.username = username
    this.password = password
    this.error_msgs = new Array()
  }

  isValid() {
    let result = true
    this.error_msgs = new Array()



    return result;
  }


  logIn() {

    if (!this.isValid()) {

      console.log(this.error_msgs)
      alert('error: look at the console!!')
      return;
    }

    axios.post(`${adress}/api/auth/login`, this).then(res => {
      if (res.status === 200) {
        alert(`LogIn success, look at the console!!`)
        console.log(res.data)
      }
    }).catch(function (error) {
      alert(`LogIn error!!!`)
    });

  }



};