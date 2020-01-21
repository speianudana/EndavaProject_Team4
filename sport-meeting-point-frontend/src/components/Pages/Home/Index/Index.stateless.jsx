import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
// import { Link } from 'react-router-dom'
// import { eventInfoUrl, newsInfoUrl } from '../../../App/AppConstRoutes'
import NewsContainer from './News/index.js'
import EventsContainer from './SportEvents'

function IndexStateless ({ eventsArray, newsArray, isLoading }) {
  /*
      This var shows what will be displayed in the window, news or events
    */
  const [isEvent, setIsEvent] = React.useState(true)
  return (
    <div id={style.NewsEvents}>
      <div id={style.NewsEventsTopBar}>
        <button
          className={`${style.btnNewsEventsTopBar} ${isEvent ? style.clickedBtn : ''}`}
          onClick={e => setIsEvent(true)}
        >
                    Events
        </button>
        <button
          className={`${style.btnNewsEventsTopBar} ${!isEvent ? style.clickedBtn : ''}`}
          onClick={e => setIsEvent(false)}
        >
                    News
        </button>
      </div>

      {!isEvent && <NewsContainer />}
      {isEvent && <EventsContainer />}
      {/* <EventsContainer /> */}

      {/* <div className={style.btnNewsEventsBody}>

        {
          setIsEvent => (
            <NewsContainer />
          )
        }

        {
          <EventsContainer />

        }

      </div> */}
    </div>

  )
}

IndexStateless.propTypes = {
  eventsArray: PropTypes.array,
  newsArray: PropTypes.array,
  isLoading: PropTypes.bool
}

export default IndexStateless
