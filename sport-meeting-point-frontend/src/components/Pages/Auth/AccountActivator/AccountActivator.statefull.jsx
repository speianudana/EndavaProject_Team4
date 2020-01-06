import React, { Component } from 'react'
import AccountActivatorStateless from '../AccountActivator/AccountActivator.stateless.jsx'
import { Redirect } from 'react-router-dom'
import { loginUrl, index } from '../../../App/AppConstRoutes'
import { activateUser } from '../../../../rest/User/index'

export default class AccountActivatorStatefull extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirectToLogin: false,
      redirectToHome: false,
      loadAnimation: true
    }

    this.redirectToLogin.bind(this)
  }

  componentDidMount() {
    this._isMounted = true

    const data = window.location.href.split('?')[1]
    const self = this

    activateUser(data)
      .then(res => {
        if (res.ok && res.status === 200 && self._isMounted) {
          self.setState({ loadAnimation: false })
        } else {
          self.setState({ redirectToHome: true })
        }
      })
      .catch(err => {
        self.setState({ redirectToHome: true })
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  redirectToLogin() {
    this.setState({ redirectToLogin: true })
  }

  render() {
    if (this.state.redirectToLogin) return <Redirect to={loginUrl} />
    if (this.state.redirectToHome) return <Redirect to={index} />

    return (
      <AccountActivatorStateless
        showLoadingFullpage={this.state.loadAnimation}
        loginClickHandle={e => this.redirectToLogin()}
      />
    )
  }
}
