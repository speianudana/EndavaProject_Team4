import React, { Component } from 'react'
import ArticleStateless from './Article.stateless.jsx'
import PropTypes from 'prop-types'

class ArticleStatefull extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ArticleStateless title={this.props.title} text={this.props.text} />
    )
  }
}


ArticleStatefull.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};


export default ArticleStatefull