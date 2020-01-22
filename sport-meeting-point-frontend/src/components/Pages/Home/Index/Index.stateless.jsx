import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
// import { Link } from 'react-router-dom'
// import { eventInfoUrl, newsInfoUrl } from '../../../App/AppConstRoutes'
import NewsContainer from './News/index.js'
import EventsContainer from './SportEvents'


function IndexStateless({ eventsArray, newsArray, isLoading, showEvents,
  setShowEvents }) {

  return (
    <div id={style.NewsEvents}>
      <div id={style.NewsEventsTopBar}>
        <button
          className={`${style.btnNewsEventsTopBar} ${showEvents ? style.clickedBtn : ''}`}
          onClick={e => setShowEvents(true)}
        >
          Events
        </button>
        <button
          className={`${style.btnNewsEventsTopBar} ${!showEvents ? style.clickedBtn : ''}`}
          onClick={e => setShowEvents(false)}
        >
          News
        </button>
      </div>

      {!showEvents && <NewsContainer />}
      {showEvents && <EventsContainer />}
    </div>

  )
}

IndexStateless.propTypes = {
  eventsArray: PropTypes.array,
  newsArray: PropTypes.array,
  isLoading: PropTypes.bool
}

export default IndexStateless
