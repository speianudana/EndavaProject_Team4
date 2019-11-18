


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



};