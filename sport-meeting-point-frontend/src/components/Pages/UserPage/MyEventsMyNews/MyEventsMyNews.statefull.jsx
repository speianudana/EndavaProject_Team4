import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyEventsMyNewsStateless from './MyEventsMyNews.stateless.jsx'
import { eventAndNewsAttendedByUser } from '../../../../rest/User'
import { connect } from 'react-redux'

// const events = [
//   {
//     title: 'adfadfd',
//     text: 'adgadgadgdadas fsda fsd fdas fds agda'
//   },
//   {
//     title: 'adfadfd',
//     text: 'adgadgadf sdfdsa fds  fsda fsd afdgdagda'
//   },
//   {
//     title: 'adfadfd',
//     text: 'adgadga vdfs vdfs bdsb fdgdagda'
//   }


// ]

// const news = [
//   {
//     title: 'NFNadfadfd',
//     text: 'aFNFNNdgadgadgdadas fsda fsd fdas fds agda'
//   },
//   {
//     title: 'adf sdgg sd sSDSDadfd',
//     text: 'adgadgadf sdfdsa fds  fsda fsd afdgdagda'
//   },
//   {
//     title: 'adfadfSDSDd',
//     text: 'adgadga vdfs vdfs bdsb fdgdagda'
//   }


// ]

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
    eventAndNewsAttendedByUser(this.props.getToken())
      .then(res => {
        console.log(res)
        if (res.status === 200 && res.ok) return res.json()
        else throw Error()
      })
      .then(data => {
        console.log(data)
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