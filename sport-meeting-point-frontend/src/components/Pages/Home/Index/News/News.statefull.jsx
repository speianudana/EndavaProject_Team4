import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsStateless from './News.stateless.jsx'
import style from './style.scss'
import { ButtonB } from '../../../../Layouts/Button'
import { Container } from '../../../../Layouts/Container'
import imgTest1 from '../../../../../../static/q1.jpg'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadFixedNumberOfNews } from '../../../../../redux/actions/News.actions'


class NewsStatefull extends Component {

  constructor(props) {
    super(props)

    this.loadNewsFromServer.bind(this)
  }

  loadNewsFromServer() {
    const excludedIds = this.props.allNews.map(a => Number(a.id))

    this.props.loadFixedNumberOfNews(excludedIds || [], 5)
  }

  componentDidMount() {

    const excludedIds = this.props.allNews.map(a => Number(a.id))

    if (excludedIds && excludedIds < 5)
      this.loadNewsFromServer()
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props)

    return true
  }


  render() {
    return (
      <>
        <div id={style.mainContainer}>
          {
            this.props.allNews &&
            this.props.allNews.length > 0 &&
            this.props.allNews.map((item, index) => (
              <NewsStateless
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.context}
                img={item.image}
              />
            ))



          }
        </div>

        <Container>
          <ButtonB title='See more news...' onClickHandle={() => this.loadNewsFromServer()} />
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  allNews: state.allNewsData.allNews
})


const mapDispatchToProps = dispatch => {
  return {
    loadFixedNumberOfNews: bindActionCreators(loadFixedNumberOfNews, dispatch)
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(NewsStatefull)