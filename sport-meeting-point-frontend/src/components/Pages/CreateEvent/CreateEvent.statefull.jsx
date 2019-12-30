import React, { PureComponent } from 'react'
import CreateEventStateless from './CreateEvent.stateless.jsx'
import { url } from '../../../utils/server-url'
import axios from 'axios'
import { FullPageLoading1 } from '../../Layouts/Loading'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { eventInfoUrl } from '../../App/AppConstRoutes'

class CreateEventStatefull extends PureComponent {
  constructor (props) {
    super(props)
    this.handleAllInputData.bind(this)

    this.state = {
      validationMessage: [],
      loadPage: false,
      getCreatedEventId: 0
    }
  }

  componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  handleAllInputData (data) {
    this.setState({ loadPage: true })

    const self = this
    const token = this.props.getToken()
    const formData = new FormData()
    const newData = {
      title: data.title.length > 0 ? data.title : null,
      address: data.address.length > 0 ? data.address : null,
      previewMessage: data.previewMessage.length > 0 ? data.previewMessage : null,
      description: data.description.length > 0 ? data.description : null
    }

    formData.append('file', data.image != null ? data.image : new File([], ''))
    formData.append('data', JSON.stringify(newData))

    const headers = {
      'Content-Type': undefined,
      Authorization: `Bearer_${token}`
    }

    axios.post(url + '/api/for_authenticated_user/event/add', formData, {
      headers: headers
    })
      .then((response) => {
        if (!self._isMounted) return

        if (response.data.validationMessage) {
          self.setState({ validationMessage: response.data.validationMessage })
          setTimeout(() => {
            if (self._isMounted) self.setState({ validationMessage: [] })
          }, 5000)
        } else {
          // console.log(response.data)
          this.setState({ getCreatedEventId: Number(response.data) })
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          location.reload()
        }
      })
      .then(() => {
        if (self._isMounted) self.setState({ loadPage: false })
      })
  }

  render () {
    if (this.state.getCreatedEventId !== 0) {
      return <Redirect to={`${eventInfoUrl}?id=${this.state.getCreatedEventId}`} />
    }

    return (
      <React.Fragment>

        {this.state.loadPage && <FullPageLoading1 />}

        <CreateEventStateless
          handleAllInputData={e => this.handleAllInputData(e)}
          validationMessage={this.state.validationMessage}
        />

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  getToken: state.authenticationData.getToken
})

CreateEventStatefull.propTypes = {
  getToken: PropTypes.func
}

export default connect(mapStateToProps)(CreateEventStatefull)
