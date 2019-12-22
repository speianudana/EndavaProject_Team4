import React, { Component } from 'react'
import CreateEventStateless from './CreateEvent.stateless.jsx'
import { tokenWorker } from '../../../utils/token-worker'
import { url } from '../../../utils/server-url'
import axios from 'axios'

export default class CreateEventStatefull extends Component {

  constructor(props) {
    super(props)
    this.handleAllInputData.bind(this)

    this.state = {
      validationMessage: []
    }
  }

  handleAllInputData(data) {
    const self = this
    const token = tokenWorker.loadTokenFromLocalStorage()
    const formData = new FormData();
    const newData = {
      title: data.title.length > 0 ? data.title : null,
      address: data.address.length > 0 ? data.address : null,
      previewMessage: data.previewMessage.length > 0 ? data.previewMessage : null,
      description: data.description.length > 0 ? data.description : null,
    }

    formData.append("file", data.image != null ? data.image : new File([], ""))
    formData.append("data", JSON.stringify(newData))

    const headers = {
      'Content-Type': undefined,
      'Authorization': `Bearer_${token}`
    }

    axios.post(url + '/api/event/add', formData, {
      headers: headers
    })
      .then((response) => {
        if (response.data.validationMessage)
          self.setState({ validationMessage: response.data.validationMessage })
      })
      .catch((error) => {
        console.error(error)
      })

  }



  render() {
    return <CreateEventStateless
      handleAllInputData={e => this.handleAllInputData(e)}
      validationMessage={this.state.validationMessage}
    />
  }
}
