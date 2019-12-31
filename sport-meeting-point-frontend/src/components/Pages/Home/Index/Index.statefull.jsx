import React, { Component } from 'react'
import { Container } from '../../../Layouts/Container'
import { Header } from './Header'
import { SubHeader } from './SubHeader'
import NewsContainer from './News'
import EventsContainer from './SportEvents'

class IndexStatefull extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articles: []
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
      <>

        <Header />
        <SubHeader />
        <NewsContainer />

        <Container>

          <EventsContainer />

          <br />
          <br />
        </Container>
      </>
    )
  }
}

export default IndexStatefull
