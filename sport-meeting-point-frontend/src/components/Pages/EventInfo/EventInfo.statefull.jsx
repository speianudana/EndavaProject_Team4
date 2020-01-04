import React, { Component } from 'react'
import EventInfoStateless from './EventInfo.stateless.jsx'
import PropTypes from 'prop-types'
import { FullPageLoading1 as Loading } from '../../Layouts/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import noImg from '../../../../static/No-Image-Basic.png'
import { ParticipantView } from './EventInfo.utils.jsx'
import { fetchSportEventById } from '../../../redux/actions/Event.actions'
import { subscribeUserToEvent } from '../../../rest/SportEvent'
import { CustomAlertOk, CustomAlertWarning } from '../../Layouts/CustomAlert'

class EventInfoStatefull extends Component {
  constructor(props) {
    super(props)

    this.state = {


      loadProccess: true,
      getSportEventId: null,
      getSportEventArrayIndex: -1,

      messageNode: null,
      messageText: '',
      reloadOnDeleteMessageNode: false,

      getUserAlreadyParticipateToThisEvent: false

    }

    this.onParticipateClick.bind(this)
    this.onNotParticipateClick.bind(this)
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

    window.scrollTo(0, 0);

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
      }
    }

    if (!this.state.getUserAlreadyParticipateToThisEvent
      && this.state.getSportEventArrayIndex !== -1
      && this.props.allEvents[this.state.getSportEventArrayIndex].participants
      && this.props.allEvents[this.state.getSportEventArrayIndex].participants.length > 0) {

      const index = this.props.allEvents[this.state.getSportEventArrayIndex].participants
        .findIndex(a => a.email === this.props.getUserEmail)

      if (index !== -1)
        this.setState({
          getUserAlreadyParticipateToThisEvent: true
        })

    }

    return true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  onParticipateClick(e) {
    const token = this.props.getTokenMethod()
    const eventId = this.props.allEvents[this.state.getSportEventArrayIndex].id

    subscribeUserToEvent(token, eventId)
      .then(res => {
        if (!this._isMounted) return

        this.setState({
          messageNode: CustomAlertOk,
          messageText: 'Congratulations, you have successfully signed up for this event',
          reloadOnDeleteMessageNode: true
        })

      })
      .catch(e => {
        if (!this._isMounted) return

        if (e.status === 401) {

          this.setState({
            messageNode: CustomAlertWarning,
            messageText: 'To participate in the event, please login or register'
          })

        }
      })
  }

  onNotParticipateClick(e) {
    alert('zzz')
  }

  render() {
    const sportEvent = this.props.allEvents[this.state.getSportEventArrayIndex]
    const Message = this.state.messageNode

    return (
      <>
        {this.state.loadProccess && <Loading />}

        {
          Message && <Message
            message={this.state.messageText}
            onCloseHandler={e => {
              this.setState({
                messageNode: null
              })

              if (this.state.reloadOnDeleteMessageNode) location.reload()

            }}
          />
        }

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

            alreadyParticipating={this.state.getUserAlreadyParticipateToThisEvent}

            onParticipateClick={e => this.onParticipateClick(e)}
            onNotParticipateClick={e => this.onNotParticipateClick(e)}
          />
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  allEvents: state.allEventData.allEvents,
  getTokenMethod: state.authenticationData.getToken,
  isAuthenticated: state.authenticationData.isAuthenticated,
  getUserEmail: state.authenticationData.email,
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
