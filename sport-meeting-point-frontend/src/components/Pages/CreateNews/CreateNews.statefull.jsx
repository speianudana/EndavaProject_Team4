import React, { Component } from 'react'
import CreateNewsStateless from './CreateNews.stateless.jsx'
import { url } from '../../../utils/server-url'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class CreateNewsStatefull extends Component {
  constructor (props) {
    super(props)
    this.handleAllInputData.bind(this)
  }

  handleAllInputData (data) {
    const token = this.props.getToken()

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer_${token}`
    }

    axios.post(url + '/api/news/add', data, {
      headers: headers
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        if (error.response.status === 401) {
          location.reload()
        }
        console.error(error)
      })
  }

  render () {
    return <CreateNewsStateless onHandleAllInputData={(data) => this.handleAllInputData(data)} />
  }
}

const mapStateToProps = state => ({
  getToken: state.authenticationData.getToken
})

CreateNewsStatefull.propTypes = {
  getToken: PropTypes.func
}

export default connect(mapStateToProps)(CreateNewsStatefull)
