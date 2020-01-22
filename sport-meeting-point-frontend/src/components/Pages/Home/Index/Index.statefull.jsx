import React, { Component } from 'react'
import IndexStateless from './Index.stateless.jsx'
// import { scrollEvent } from 'data/ScrollPageEvent/ScrollPageEvent.action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import pageHeight from 'utils/pageHeight'
import { loadFixedNumberOfEventsId } from 'data/actions/Event.actions'
import { loadFixedNumberOfNews } from 'data/actions/News.actions'

class IndexStatefull extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: [],
      events: [],
      showEvents: true //or else show news
    }

    this.setShowEvents.bind(this)
  }

  componentDidMount() {
    this._isMounted = true
    if (!this.props.eventsIsFetch && this.state.showEvents) {
      this.props.loadFixedNumberOfEventsId(this.props.allEvents.map(a => Number(a.id)), 5)
    }
    if (!this.props.newsIsFetch && !this.state.showEvents) {
      this.props.loadFixedNumberOfNews(this.props.allNews.map(a => Number(a.id)), 5)
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.currentY !== this.props.currentY) {
      const pageH = pageHeight() - window.innerHeight

      if (this.props.currentY > (pageH - 300)) {
        // console.log(this.props)
        if (!this.props.eventsIsFetch && this.state.showEvents) {
          this.props.loadFixedNumberOfEventsId(this.props.allEvents.map(a => Number(a.id)), 5)
        }
        if (!this.props.newsIsFetch && !this.state.showEvents) {
          this.props.loadFixedNumberOfNews(this.props.allNews.map(a => Number(a.id)), 5)
        }
      }
    }


  }

  setShowEvents(boolVal) {
    this.setState({ showEvents: boolVal })

    if (!boolVal && this.props.allNews.length === 0 && !this.props.newsIsFetch) {
      this.props.loadFixedNumberOfNews(this.props.allNews.map(a => Number(a.id)), 5)
    }

    if (boolVal && this.props.allEvents.length === 0 && !this.props.eventsIsFetch) {
      this.props.loadFixedNumberOfEventsId(this.props.allEvents.map(a => Number(a.id)), 5)
    }

  }

  render() {
    return (
      <IndexStateless
        eventsArray={this.state.events}
        newsArray={this.state.news}
        showEvents={this.state.showEvents}
        setShowEvents={data => this.setShowEvents(data)}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    currentY: state.scrollPageEvent.yPos,
    eventsIsFetch: state.allEventData.isFetch,
    allEvents: state.allEventData.allEvents,
    newsIsFetch: state.allNewsData.isFetch,
    allNews: state.allNewsData.allNews
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loadFixedNumberOfEventsId: bindActionCreators(loadFixedNumberOfEventsId, dispatch),
    loadFixedNumberOfNews: bindActionCreators(loadFixedNumberOfNews, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexStatefull)
