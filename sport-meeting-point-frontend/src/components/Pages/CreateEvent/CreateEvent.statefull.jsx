import React, { Component } from 'react'
import CreateEventStateless from './CreateEvent.stateless.jsx'
import { tokenWorker } from '../../../utils/token-worker'
import { adress } from '../../../utils/server-adress'
import axios from 'axios'

export default class CreateEventStatefull extends Component {

  constructor(props) {
    super(props)
    this.handleAllInputData.bind(this)
  }

  handleAllInputData(data) {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer_eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE1NzU1Nzk4MTEsImV4cCI6MTU3NTU4MzQxMX0.GkFmH4Ul3MUJpdrhAW1vCKiqIXiDcdDJ02VSHTQiyeY'
    }

    axios.post(adress + '/api/event/add', data, {
      headers: headers
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

  }



  render() {
    return <CreateEventStateless
      handleAllInputData={this.handleAllInputData}
    />
  }
}
