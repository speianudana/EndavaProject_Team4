import React, { Component } from 'react'
import EventInfoStateless from './EventInfo.stateless.jsx'
import PropTypes from 'prop-types'
import { FullPageLoading1 as Loading } from '../../Layouts/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import noImg from '../../../../static/No-Image-Basic.png'
import { ParticipantView } from './EventInfo.utils.jsx'
import { fetchSportEventById, refreshSportEventArray } from '../../../redux/actions/Event.actions'
import { subscribeUserToEvent, unsubscribeUserToEvent } from '../../../rest/SportEvent'
import { CustomAlertOk, CustomAlertWarning } from '../../Layouts/CustomAlert'

class EventInfoStatefull extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loadPage: true,
      sportEvent: null,
      eventDbId: null,

      messageNode: null,
      reloadOnDeleteMessageNode: false,
      messageText: '',

      getUserAlreadyParticipateToThisEvent: false

    }

    this.onParticipateClick.bind(this)
    this.onNotParticipateClick.bind(this)
    this.loadEvent.bind(this)
  }

  loadEvent (eventDbId) {
    const events = this.props.allEvents

    const eIndex = events.findIndex(a => a.id === eventDbId)

    this.setState({
      eventDbId: eventDbId
    })

    if (eIndex === -1) {
      this.props.fetchSportEventById(eventDbId)
    } else {
      this.setState({
        sportEvent: events[eIndex],
        loadPage: false
      })
      // this.props.refreshSportEventArray()
    }
  }

  componentDidMount () {
    this._isMounted = true
    const getEventIdFromUrl = Number(
      window.location.href.split('?id=')[1]
    )
    this.loadEvent(getEventIdFromUrl)

    window.scrollTo(0, 0)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (!this.state.sportEvent && !nextState.sportEvent) {
      const events = this.props.allEvents
      const eIndex = events.findIndex(a => a.id === this.state.eventDbId)

      if (eIndex !== -1) {
        this.setState({
          sportEvent: events[eIndex],
          loadPage: false
        })
        // return false
      }
    } else {
      if (this.state.sportEvent &&
                !this.state.getUserAlreadyParticipateToThisEvent &&
                this.state.sportEvent.participants &&
                this.state.sportEvent.participants.length > 0) {
        const z = this.state.sportEvent.participants.findIndex(a => a.email === this.props.getUserEmail)

        if (z !== -1) {
          this.setState({
            getUserAlreadyParticipateToThisEvent: true
          })

          // return false
        }
      } else if (nextState.sportEvent &&
                !this.state.getUserAlreadyParticipateToThisEvent &&
                nextState.sportEvent.participants &&
                nextState.sportEvent.participants.length > 0) {
        const z = nextState.sportEvent.participants.findIndex(a => a.email === this.props.getUserEmail)

        if (z !== -1) {
          this.setState({
            getUserAlreadyParticipateToThisEvent: true
          })

          // return false
        }
      }
    }

    return true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  onParticipateClick (e) {
    const token = this.props.getTokenMethod()
    const eventId = this.state.eventDbId

    subscribeUserToEvent(token, eventId)
      .then(res => {
        if (!this._isMounted) return

        if (res.status === 200 && res.ok) {
          this.setState({
            messageNode: CustomAlertOk,
            messageText: 'Congratulations, you have successfully signed up for this event',
            reloadOnDeleteMessageNode: true
          })
        } else {
          throw new Error(res)
        }
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

  onNotParticipateClick () {
    const token = this.props.getTokenMethod()
    const eventId = this.state.eventDbId

    unsubscribeUserToEvent(token, eventId)
      .then(res => {
        if (!this._isMounted) return
        if (res.status === 200 && res.ok) {
          this.setState({
            messageNode: CustomAlertWarning,
            messageText: 'We regret that you unsubscribed from the event',
            reloadOnDeleteMessageNode: true
          })
        } else {
          throw Error(res)
        }
      })
      .catch(e => {
        if (!this._isMounted) return

        if (e.status === 401) {

        }
      })
  }

  render () {
    const sportEvent = this.state.sportEvent
    const Message = this.state.messageNode

    return (
      <>
        {this.state.loadPage && <Loading />}

        {
          Message &&
            <Message
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
          sportEvent &&
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
  getUserEmail: state.authenticationData.email
})

const mapDispatchToProps = dispatch => (
  {
    fetchSportEventById: bindActionCreators(fetchSportEventById, dispatch),
    refreshSportEventArray: bindActionCreators(refreshSportEventArray, dispatch)
  }
)

EventInfoStatefull.propTypes = {
  allEvents: PropTypes.array,
  fetchSportEventById: PropTypes.func,
  getUserEmail: PropTypes.string,
  getTokenMethod: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInfoStatefull)
