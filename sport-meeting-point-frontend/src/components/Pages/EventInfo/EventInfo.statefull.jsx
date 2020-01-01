import React, { Component } from 'react'
import EventInfoStateless from './EventInfo.stateless.jsx'
import PropTypes from 'prop-types'
import { FullPageLoading1 as Loading } from '../../Layouts/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSportEventById } from '../../../redux/actions/Event.actions'
import noImg from '../../../../static/No-Image-Basic.png'

const ParticipantView = ({ arr }) => (
  <>
    {
      arr.map((a, i) => (
        <p key={i}>
          {a.firstName} {a.lastName}  -  {a.email}
        </p>
      ))
    }
  </>
)

class EventInfoStatefull extends Component {
  constructor(props) {
    super(props)

    this.state = {

      loadProccess: true,
      eventInfo: null,
      participants: null,
      sportEventDbId: 0,
    }
  }

  componentDidMount() {
    this._isMounted = true
    const getEventIdFromUrl = Number(window.location.href.split('?id=')[1])
    this.setState({
      sportEventDbId: getEventIdFromUrl
    })

    const index1 = this.props.allEvents.findIndex(a => a.id === getEventIdFromUrl)
    if (index1 === -1) this.props.fetchSportEventById(getEventIdFromUrl)

  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.state.sportEventDbId !== nextState.sportEventDbId) return false
    if (this.state.eventInfo === null) {
      const index = this.props.allEvents.findIndex(a => a.id === this.state.sportEventDbId)
      if (index !== -1) {
        this.setState({
          loadProccess: false,
          eventInfo: this.props.allEvents[index]
        })
      }
      return false
    }
    if (this.state.participants === null) {
      const index = this.props.allEvents.findIndex(a => a.id === this.state.sportEventDbId)
      if (index !== -1 && this.props.allEvents[index].participants
        && this.props.allEvents[index].participants.length > 0) {
        this.setState({
          participants: this.props.allEvents[index].participants
        })
      }
      return false
    }
    if (this.props !== nextProps) return false

    return true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <>
        {this.state.loadProccess && <Loading />}
        {
          this.state.eventInfo &&
          <EventInfoStateless
            title={this.state.eventInfo.title}
            authorFullName={this.state.eventInfo.authorFullName}
            eventDate={this.state.eventInfo.eventDate}
            address={this.state.eventInfo.address}
            previewMessage={this.state.eventInfo.previewMessage}
            description={this.state.eventInfo.description}
            image={this.state.eventInfo.image || noImg}
            participants={this.state.participants
              ? <ParticipantView arr={this.state.participants} />
              : div}
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
    fetchSportEventById: bindActionCreators(fetchSportEventById, dispatch)
  }
)

EventInfoStatefull.propTypes = {
  allEvents: PropTypes.array,
  fetchSportEventById: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInfoStatefull)
