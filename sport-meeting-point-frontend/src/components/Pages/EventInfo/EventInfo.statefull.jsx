import React, { Component } from 'react'
import EventInfoStateless from './EventInfo.stateless.jsx'
import PropTypes from 'prop-types'
import { FullPageLoading1 as Loading } from '../../Layouts/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSportEventById } from '../../../redux/actions/Event.actions'
import noImg from '../../../../static/No-Image-Basic.png'

class EventInfoStatefull extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loadProccess: true,
      sportEventArrayId: -1,
      sportEventDbId: null
    }
  }

  componentDidMount () {
    this._isMounted = true
    const getEventIdFromUrl = Number(window.location.href.split('?id=')[1])
    const index1 = this.props.allEvents.findIndex(a => a.id === getEventIdFromUrl)

    if (index1 === -1) {
      this.setState({ sportEventDbId: getEventIdFromUrl })
      this.props.fetchSportEventById(getEventIdFromUrl)
    } else {
      this.setState({
        loadProccess: false,
        sportEventArrayId: index1,
        sportEventDbId: getEventIdFromUrl
      })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props !== prevProps) {
      const index1 = this.props.allEvents.findIndex(a => a.id === this.state.sportEventDbId)
      if (index1 !== -1) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          loadProccess: false,
          sportEventArrayId: index1
        })
      }
    }
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    return (
      <>
        {this.state.loadProccess && <Loading />}
        {
          !this.state.loadProccess &&
            <EventInfoStateless
              title={this.props.allEvents[this.state.sportEventArrayId].title}
              authorFullName={this.props.allEvents[this.state.sportEventArrayId].authorFullName}
              eventDate={this.props.allEvents[this.state.sportEventArrayId].eventDate}
              address={this.props.allEvents[this.state.sportEventArrayId].address}
              previewMessage={this.props.allEvents[this.state.sportEventArrayId].previewMessage}
              description={this.props.allEvents[this.state.sportEventArrayId].description}
              image={this.props.allEvents[this.state.sportEventArrayId].image || noImg}
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
