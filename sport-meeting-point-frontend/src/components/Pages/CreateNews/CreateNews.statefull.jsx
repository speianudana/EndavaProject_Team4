import React, { Component } from 'react'
import CreateNewsStateless from './CreateNews.stateless.jsx'
import { tokenWorker } from '../../../utils/token-worker'
import { url } from '../../../utils/server-url'
import axios from 'axios'

export default class CreateNewsStatefull extends Component {

    constructor(props) {
        super(props)
        this.handleAllInputData.bind(this)
    }

    handleAllInputData(data) {

        const token = tokenWorker.loadTokenFromLocalStorage()

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer_${token}`
        }

        axios.post(url + '/api/news/add', data, {
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
        return <CreateNewsStateless
            handleAllInputData={this.handleAllInputData}
        />
    }
}
