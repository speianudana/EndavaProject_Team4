import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyEventsMyNewsStateless from './MyEventsMyNews.stateless.jsx'

const events = [
  {
    title: 'adfadfd',
    text: 'adgadgadgdadas fsda fsd fdas fds agda'
  },
  {
    title: 'adfadfd',
    text: 'adgadgadf sdfdsa fds  fsda fsd afdgdagda'
  },
  {
    title: 'adfadfd',
    text: 'adgadga vdfs vdfs bdsb fdgdagda'
  }


]

const news = [
  {
    title: 'NFNadfadfd',
    text: 'aFNFNNdgadgadgdadas fsda fsd fdas fds agda'
  },
  {
    title: 'adf sdgg sd sSDSDadfd',
    text: 'adgadgadf sdfdsa fds  fsda fsd afdgdagda'
  },
  {
    title: 'adfadfSDSDd',
    text: 'adgadga vdfs vdfs bdsb fdgdagda'
  }


]

export default class MyEventsMyNewsStatefull extends Component {

  render() {
    return <MyEventsMyNewsStateless
      eventsArray={events}
      newsArray={news}
    />
  }
}
