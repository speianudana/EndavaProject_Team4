import React, { Component } from 'react'

import { Container } from 'bootstrap-4-react'

import TestRedux from './TestRedux/TestRedux.statefull.jsx'

class IndexStatefull extends Component {
  constructor(props) {
    super(props)



  }

  render() {
    return (
      <Container>
        {/* <TestRedux /> */}
        <h1>Home page1</h1>

      </Container>
    )
  }
}

export default IndexStatefull