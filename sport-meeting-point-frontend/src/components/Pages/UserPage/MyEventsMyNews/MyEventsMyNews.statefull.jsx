import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyEventsMyNewsStateless from './MyEventsMyNews.stateless.jsx'
import { eventAndNewsAttendedByUser } from '../../../../rest/User'
import { connect } from 'react-redux'


class MyEventsMyNewsStatefull extends Component {

  constructor(props) {
    super(props)

    this.state = {
      events: [],
      news: []
    }
  }

  componentDidMount() {
    this._isMount = true

    const self = this

    eventAndNewsAttendedByUser(this.props.getToken())
      .then(res => {
        if (res.status === 200 && res.ok) return res.json()
        else throw Error()
      })
      .then(data => {
        console.log(data)
        if (self._isMount) {
          self.setState({
            events: data.events && data.events.length > 0 ? data.events : [],
            news: data.news && data.news.length > 0 ? data.news : []
          })
        }
      })
      .catch(err => {
        console.warn('error on myevents and mynews', err)
      })

  }

  componentWillUnmount() {
    this._isMount = false
  }



  render() {
    return <MyEventsMyNewsStateless
      eventsArray={this.state.events}
      newsArray={this.state.news}
    />
  }
}


const mapStateToProps = state => ({
  getToken: state.authenticationData.getToken
})

export default connect(mapStateToProps)(MyEventsMyNewsStatefull)