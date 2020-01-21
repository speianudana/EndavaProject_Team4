import React, { Component } from 'react'
import IndexStateless from './Index.stateless.jsx'
class IndexStatefull extends Component {
  constructor (props) {
    super(props)

    this.state = {
      news: [],
      events: []
    }
  }

  componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    return (
      <IndexStateless
        eventsArray={this.state.events}
        newsArray={this.state.news}
      />
    )
  }
}

export default IndexStatefull
