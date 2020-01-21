import React, { PureComponent } from 'react'
import CreateNewsStateless from './CreateNews.stateless.jsx'
import { url } from '../../../utils/server-url'
import axios from 'axios'
import { FullPageLoading1 } from '../../Layouts/Loading'

import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { newsInfoUrl } from '../../App/AppConstRoutes'
import handle401error from 'utils/handle401error'

class CreateNewsStatefull extends PureComponent {
  constructor (props) {
    super(props)
    this.onHandleAllInputData.bind(this)

    this.state = {
      validationMessage: [],
      loadPage: false,
      getCreatedNewsId: 0
    }
  }

  componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  onHandleAllInputData (data) {
    this.setState({ loadPage: true })

    // console.log('z1', data)

    const self = this
    const token = this.props.getToken()
    const formData = new FormData()
    const newData = {
      title: data.title.length > 0 ? data.title : null,
      context: data.context.length > 0 ? data.context : null,
      sportCategory: data.selectedCategory
      /* format YYYY-MM-DD */
      // newsDate: data.date
    }

    formData.append('file', data.image != null ? data.image : new File([], ''))
    formData.append('data', JSON.stringify(newData))

    const headers = {
      'Content-Type': undefined,
      Authorization: `Bearer_${token}`
    }

    axios.post(url + '/api/for_authenticated_user/news/add', formData, {
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
          this.setState({ getCreatedNewsId: Number(response.data) })
        }
      })
      .catch((error) => {
        // clg
        handle401error(error.response.status, true)
        // if (error.response.status && error.response.status === 401) {
        //   location.reload()
        // }
      })
      .then(() => {
        if (self._isMounted) self.setState({ loadPage: false })
      })
  }

  render () {
    if (this.state.getCreatedNewsId !== 0) {
      return <Redirect to={`${newsInfoUrl}?id=${this.state.getCreatedNewsId}`} />
    }

    return (
      <React.Fragment>

        {this.state.loadPage && <FullPageLoading1 />}

        <CreateNewsStateless
          onHandleAllInputData={e => this.onHandleAllInputData(e)}
          validationMessage={this.state.validationMessage}
          allCategories={this.props.allSportCategories}
        />

      </React.Fragment>
    )
  }
}

CreateNewsStatefull.propTypes = {
  getToken: PropTypes.func,
  allSportCategories: PropTypes.array
}

export default CreateNewsStatefull
