import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EventStateless from './Event.stateless.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadFixedNumberOfEventsId } from '../../../../../redux/actions/Event.actions'
// import noImg from '../../../../../../static/No-Image-Basic.png'
// import { ButtonB } from '../../../../Layouts/Button/index'

class EventsStatefull extends Component {
  componentDidMount() {
    // const excludedIds = this.props.allEvents.map(a => Number(a.id))

    // if (this.props.allEvents.length < 5) this.props.loadEvents(excludedIds, 5)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
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
              authorName={item.authorFullName}
              address={item.address}
              eventDate={item.eventDate}
              category={item.category}
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
