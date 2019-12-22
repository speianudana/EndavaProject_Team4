import React, { Component } from 'react'
import ArticleStateless from './Article.stateless.jsx'
import PropTypes from 'prop-types'
import { post } from 'axios'
import { url } from '../../../../../utils/server-url'

class ArticleStatefull extends Component {

  constructor(props) {
    super(props)

    this.state = {
      image: this.props.image
    }
  }

  componentDidMount() {

    this._isMounted = true

    const self = this

    post(`${url}/api/event/image_by_id`, 15, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(result => {

        if (self._isMounted)
          // self.setState({
          //   image: "data:image/png;base64," +
          //     btoa(String.fromCharCode.apply(null, new Uint8Array(result.data.image)))
          // })
          // result.data.image
          console.log(result.data)
      })

  }

  componentWillUnmount() {
    this._isMounted = false
  }


  render() {
    return (
      <ArticleStateless title={this.props.title} text={this.props.text} image={this.state.image} />

    )
  }
}


ArticleStatefull.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};


export default ArticleStatefull