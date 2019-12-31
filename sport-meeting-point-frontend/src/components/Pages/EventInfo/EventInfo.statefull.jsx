import React, { Component } from 'react'
import EventInfoStateless from './EventInfo.stateless.jsx'
// import PropTypes from 'prop-types'
// import { get } from 'axios'
// import { url } from '../../../utils/server-url'
import { FullPageLoading1 as Loading } from '../../Layouts/Loading'

export default class EventInfoStatefull extends Component {
  constructor (props) {
    super(props)

    // this.loadEventInfoById.bind(this)

    this.state = {
      title: '',
      previewMsg: '',
      description: '',
      address: '',
      authorName: '',
      eventDate: '',

      isLoadAnimation: true
    }
  }

  // loadEventInfoById (getEventId) {
  //   get(`${url}/api/for_all/event/event_by_id?id=${getEventId}`)
  //     .then(result => {
  //       if (!this._isMounted) return
  //       this.setState({
  //         title: result.data.title,
  //         previewMessage: result.data.previewMessage,
  //         description: result.data.description,
  //         address: result.data.address,
  //         authorName: result.data.authorName,
  //         eventDate: result.data.eventDate,
  //         participantsName: result.data.participantsName,

  //         isLoadAnimation: false
  //       })
  //     })
  // }

  componentDidMount () {
    this._isMounted = true

    const getEventIdFromUrl = Number(window.location.href.split('?id=')[1])
    // this.loadEventInfoById(getEventIdFromUrl)
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    return (
      <>
        {this.state.isLoadAnimation && <Loading />}
        <EventInfoStateless
          title={this.state.title}
          authorFullName={this.state.authorName}
          eventDate={this.state.eventDate}
          address={this.state.address}
          previewMessage={this.state.previewMessage}
          description={this.state.description}
        />
      </>
    )
  }
}
