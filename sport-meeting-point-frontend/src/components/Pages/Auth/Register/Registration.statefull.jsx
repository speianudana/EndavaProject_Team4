import React from 'react'
import RegistrationStateless from './Registration.stateless.jsx'
import axios from 'axios'
import { url } from '../../../../utils/server-url'
import { Redirect } from 'react-router-dom'
import { index } from '../../../App/AppConstRoutes'
import { FullPageLoading1 as FullPageLoading } from '../../../Layouts/Loading'

class RegistrationStatefull extends React.Component {
  constructor(props) {
    super(props)

    this.handleBtnRegistr.bind(this)
    this.setNullForEmptyString.bind(this)

    this.state = {
      errorMsgs: [],
      redirectToHome: false,
      showLoadPage: false,
      expectConfirmationEmail: false
    }
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  /* TO DO: needed for correct backend validation

  */
  setNullForEmptyString(str) {
    return str === '' ? null : str
  }

  handleBtnRegistr(regStatelessAccData) {
    const data = {
      firstName: this.setNullForEmptyString(regStatelessAccData.firstName),
      lastName: this.setNullForEmptyString(regStatelessAccData.lastName),
      email: this.setNullForEmptyString(regStatelessAccData.email),
      password: this.setNullForEmptyString(regStatelessAccData.password)
      // passwordRepeat: regStatelessAccData.passwordRepeat
    }

    this.setState({ showLoadPage: true })

    axios.post(`${url}/api/auth/registration`, data).then(res => {
      if (res.status === 200 && this._isMounted) {
        if (res.data.validationMessage) {
          this.setState({ errorMsgs: res.data.validationMessage })
          setTimeout(() => {
            if (this._isMounted) this.setState({ errorMsgs: [] })
          }, 6000)
        } else {
          this.setState({ expectConfirmationEmail: true })
        }
      }
    })
      .catch(function (error) {
        console.warn('Reg', error)
      })
      .then(() => {
        if (this._isMounted) {
          this.setState({ showLoadPage: false })
        }
      })
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to={index} />
    }

    return (
      <div>
        {this.state.showLoadPage && <FullPageLoading />}
        <RegistrationStateless
          handleBtnRegistr={(a) => { this.handleBtnRegistr(a) }}
          errorMsgs={this.state.errorMsgs}
          expectConfirmationEmail={this.state.expectConfirmationEmail}
        />
      </div>
    )
  }
}

export default RegistrationStatefull
