import React, { Component } from 'react'
import { FullPageLoading1 as Loading } from '../../../Layouts/Loading'
import axios from 'axios'
import { url } from '../../../../utils/server-url'

export default class AccountActivatorStatefull extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirectToLogin: false,
      redirectToHome: false
    }
  }

  componentDidMount() {
    this._isMounted = true

    const data = window.location.href.split('?')

    axios.get(`${url}/api/auth/validate?data=${data[1]}`).then(result => {
      if (this._isMounted) {
        console.log(result)
        // alert('Account has been activated')
      }
    })
      .catch(error => {
        console.warn(error)
      })

  }

  componentWillUnmount() {
    this._isMounted = false
  }



  render() {
    return <Loading />
  }
}
