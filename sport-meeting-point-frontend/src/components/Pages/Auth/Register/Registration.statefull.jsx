import React from 'react'
import RegistrationStateless from './Registration.stateless.jsx'
import axios from 'axios'
import { url } from '../../../../utils/server-url'
import { tokenWorker } from '../../../../utils/token-worker'
import { Redirect } from 'react-router-dom'
import { index } from '../../../App/AppConstRoutes'

class RegistrationStatefull extends React.Component {

  constructor(props) {
    super(props)
    this.handleBtnRegistr.bind(this)

    this.state = {
      errorMsgs: new Array(),
      redirectToHome: false
    }
  }

  componentDidMount() {

  }


  handleBtnRegistr(regStatelessAccData) {

    const data = {
      username: regStatelessAccData.email,
      firstName: regStatelessAccData.firstName,
      lastName: regStatelessAccData.lastName,
      email: regStatelessAccData.email,
      password: regStatelessAccData.password,
      passwordRepeat: regStatelessAccData.passwordRepeat
    }

    axios.post(`${url}/api/auth/registration`, data).then(res => {
      if (res.status === 200) {
        if (res.data.error) {
          this.setState({ errorMsgs: res.data.error })
        }
        if (res.data.token) {
          tokenWorker.saveTokenInLocalStorage(res.data.token)
          setTimeout(() => location.reload(), 33)
          this.setState({ errorMsgs: new Array(), redirectToHome: true })

        }
      }
    }).catch(function (error) {
      console.log(error)
    });



  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to={index} />
    }

    return (
      <div>
        <RegistrationStateless handleBtnRegistr={(a) => { this.handleBtnRegistr(a) }} errorMsgs={this.state.errorMsgs} />
      </div>
    )
  }
}



export default RegistrationStatefull