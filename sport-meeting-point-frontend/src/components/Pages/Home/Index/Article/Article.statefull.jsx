import React, { Component } from 'react'
import ArticleStateless from './Article.stateless.jsx'
import PropTypes from 'prop-types'
import { post } from 'axios'
import { url } from '../../../../../utils/server-url'
import noImage from '../../../../../../static/No-Image-Basic.png'


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

    post(`${url}/api/event/image_by_id`, this.props.id, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(result => {


        if (self._isMounted) {

          if (result.data == 'NOT_FOUND') {
            self.setState({
              image: noImage
            })
            return
          }

          let TYPED_ARRAY = new Uint8Array(result.data.image);

          let str = TYPED_ARRAY.reduce((acc, cur) => acc + String.fromCharCode(cur), '')
          let base64String = btoa(str);
          let imgData = 'data:image/jpg;base64,' + base64String

          self.setState({
            image: imgData
          })
        }
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