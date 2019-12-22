import React, { Component } from 'react'
import CreateEventStateless from './CreateEvent.stateless.jsx'
import { tokenWorker } from '../../../utils/token-worker'
import { url } from '../../../utils/server-url'
import axios from 'axios'

export default class CreateEventStatefull extends Component {

  constructor(props) {
    super(props)
    this.handleAllInputData.bind(this)
  }

  handleAllInputData(data) {

    const token = tokenWorker.loadTokenFromLocalStorage()
    // console.log(token)

    var formData = new FormData();
    formData.append("file", data.image != null ? data.image : new File([], ""))

    const newData = {
      title: data.title.length > 0 ? data.title : null,
      address: data.address.length > 0 ? data.address : null,
      previewMessage: data.previewMessage.length > 0 ? data.previewMessage : null,
      description: data.description.length > 0 ? data.description : null,
    }

    formData.append("data", JSON.stringify(newData))

    // formData.append("data", new Blob([JSON.stringify(newData)], {
    //   type: "application/json"
    // }))

    const headers = {
      'Content-Type': undefined,
      'Authorization': `Bearer_${token}`
    }

    axios.post(url + '/api/event/add', formData, {
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
