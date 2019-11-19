import React, { Component } from 'react'
import NewsContainerStateless from './NewsContainer.stateless.jsx'
import { news } from './hardcode.test.data.js'


export default class NewsContainerStatefull extends Component {
  render() {
    return <NewsContainerStateless data={news} />
  }
}
