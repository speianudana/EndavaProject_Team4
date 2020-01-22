import React, { Component } from 'react'
import debounceFunc from 'utils/debounce'
import { scrollEvent } from './ScrollPageEvent.action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ScrollPageEventWrapper extends Component {
  componentDidMount() {
    const self = this
    window.addEventListener('scroll', debounceFunc(function (e) {
      self.props.scrollEvent()
    }, 500))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }


  render() {
    return <>{this.props.children}</>
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    scrollEvent: bindActionCreators(scrollEvent, dispatch)
  }
}

export default connect(() => ({}), mapDispatchToProps)(ScrollPageEventWrapper)