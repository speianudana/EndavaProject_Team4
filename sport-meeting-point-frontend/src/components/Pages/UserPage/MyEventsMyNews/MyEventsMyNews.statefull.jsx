import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyEventsMyNewsStateless from './MyEventsMyNews.stateless.jsx'
import { connect } from 'react-redux'
import { eventsForTheSubscriber } from 'restApi/SportEvent/index.js'
import { newsForTheSubscriber } from 'restApi/SportNews/index.js'

class MyEventsMyNewsStatefull extends Component {
  constructor (props) {
    super(props)

    this.state = {
      events: [],
      news: []
    }
  }

  componentDidMount () {
    this._isMount = true

    const self = this

    eventsForTheSubscriber(this.props.getToken())
      .then(res => {
        if (res.status === 200 && res.ok) return res.json()
        else throw Error()
      })
      .then(data => {
        if (self._isMount) {
          self.setState({
            events: data && data.length > 0 ? data : []
          })
        }
      })
      .catch(err => {
        console.warn('error', err)
      })

    newsForTheSubscriber(this.props.getToken())
      .then(res => {
        if (res.status === 200 && res.ok) return res.json()
        else throw Error()
      })
      .then(data => {
        if (self._isMount) {
          self.setState({
            news: data && data.length > 0 ? data : []
          })
        }
      })
      .catch(err => {
        console.warn('error', err)
      })
  }

  componentWillUnmount () {
    this._isMount = false
  }

  render () {
    return (
      <MyEventsMyNewsStateless
        eventsArray={this.state.events}
        newsArray={this.state.news}
      />
    )
  }
}

const mapStateToProps = state => ({
  getToken: state.authenticationData.getToken
})

MyEventsMyNewsStatefull.propTypes = {
  getToken: PropTypes.func
}

export default connect(mapStateToProps)(MyEventsMyNewsStatefull)
