

export default class RegistrationData {
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


}