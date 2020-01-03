import React, { Component } from 'react'
import EventInfoStateless from './EventInfo.stateless.jsx'
import PropTypes from 'prop-types'
import { FullPageLoading1 as Loading } from '../../Layouts/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import noImg from '../../../../static/No-Image-Basic.png'
import { ParticipantView } from './EventInfo.utils.jsx'
import {
  fetchSportEventById
} from '../../../redux/actions/Event.actions'


class EventInfoStatefull extends Component {
  constructor(props) {
    super(props)

    this.state = {


      loadProccess: true,
      getSportEventId: null,
      getSportEventArrayIndex: -1

    }
  }

  componentDidMount() {
    this._isMounted = true
    const getEventIdFromUrl = Number(
      window.location.href.split('?id=')[1]
    )

    this.setState({
      getSportEventId: getEventIdFromUrl
    })

    const arrIndex = this.props.allEvents.findIndex(a => (
      a.id === getEventIdFromUrl
    ))

    if (arrIndex === -1) {
      this.props.fetchSportEventById(getEventIdFromUrl)
    } else {
      this.setState({
        getSportEventArrayIndex: arrIndex,
        loadProccess: false
      })
    }

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.getSportEventArrayIndex === -1 && this.state.getSportEventId) {
      const arrIndex = this.props.allEvents.findIndex(a => (
        a.id === this.state.getSportEventId
      ))

      if (arrIndex !== -1) {
        this.setState({
          getSportEventArrayIndex: arrIndex,
          loadProccess: false
        })

        return false
      }

    }

    return true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const sportEvent = this.props.allEvents[this.state.getSportEventArrayIndex]

    return (
      <>
        {this.state.loadProccess && <Loading />}
        {
          this.state.getSportEventArrayIndex !== -1 &&
          <EventInfoStateless
            title={sportEvent.title}
            authorFullName={sportEvent.authorFullName}
            eventDate={sportEvent.eventDate}
            address={sportEvent.address}
            previewMessage={sportEvent.previewMessage}
            description={sportEvent.description}
            image={sportEvent.image || noImg}
            participants={sportEvent.participants && sportEvent.participants.length > 0
              ? <ParticipantView arr={sportEvent.participants} />
              : <div />}
          />
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  allEvents: state.allEventData.allEvents
})

const mapDispatchToProps = dispatch => (
  {
    fetchSportEventById: bindActionCreators(fetchSportEventById, dispatch),
  }
)

EventInfoStatefull.propTypes = {
  allEvents: PropTypes.array,
  fetchSportEventById: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInfoStatefull)
