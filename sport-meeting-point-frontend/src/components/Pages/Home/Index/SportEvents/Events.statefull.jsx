import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EventStateless from './Event.stateless.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadFixedNumberOfEventsId } from '../../../../../redux/actions/Event.actions'
// import noImg from '../../../../../../static/No-Image-Basic.png'

class EventsStatefull extends Component {
  componentDidMount () {
    if (this.props.allEvents.length < 5) this.props.loadEvents()
  }

  componentDidUpdate (prevProps, prevState) {
    // console.log(this.props)
  }

  render () {
    return (
      <div>

        {
          this.props.allEvents.map((item, index) => (
            <EventStateless
              key={index}
              id={item.id}
              title={item.title}
              text={item.previewMessage}
              image={item.image}
            />
          ))

        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allEvents: state.allEventData.allEvents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadEvents: bindActionCreators(loadFixedNumberOfEventsId, dispatch)
  }
}

EventsStatefull.propTypes = {
  loadEvents: PropTypes.func,
  allEvents: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsStatefull)
