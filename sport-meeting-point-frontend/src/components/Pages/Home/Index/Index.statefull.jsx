import React, { Component } from 'react'
import { Container } from '../../../Layouts/Container'
import { Header } from './Header'
// import TestRedux from './TestRedux/TestRedux.statefull.jsx'
import { SubHeader } from './SubHeader'
import { Article } from './Article'
// import exampleImg from '../../../../../static/qqq.jpg'
import axios from 'axios'
import { url } from '../../../../utils/server-url'

class IndexStatefull extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount () {
    this._isMounted = true
    const self = this

    axios.get(`${url}/api/for_all/event/all_events`)
      .then(e => {
        if (self._isMounted) { self.setState({ articles: e.data }) }
      })
      .catch(err => console.warn(err))
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    return (
      <>

        <Header />
        <SubHeader />

        <Container>

          {

            this.state.articles.map((item, index) => (
              <Article
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.previewMessage}
                image=''
              />)
            )

          }

          {/* <LoadingType1 /> */}
          <br />
          <br />
        </Container>
      </>
    )
  }
}

export default IndexStatefull
