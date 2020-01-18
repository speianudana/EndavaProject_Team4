import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { Link } from 'react-router-dom'
import { eventInfoUrl, newsInfoUrl } from '../../../App/AppConstRoutes'

function MyEventsMyNewsStateless ({ eventsArray, newsArray, isLoading }) {
  /*
    This var shows what will be displayed in the window, news or events
  */
  const [isEvent, setIsEvent] = React.useState(true)

  return (
    <div id={style.myNewsMyEvents}>
      <div id={style.myNewsMyEventsTopBar}>
        <button
          className={`${style.btnMyNewsMyEventsTopBar} ${isEvent ? style.clickedBtn : ''}`}
          onClick={e => setIsEvent(true)}
        >
          My Events
        </button>
        <button
          className={`${style.btnMyNewsMyEventsTopBar} ${!isEvent ? style.clickedBtn : ''}`}
          onClick={e => setIsEvent(false)}
        >
          My News
        </button>
      </div>

      <div className={style.btnMyNewsMyEventsBody}>

        {
          isEvent &&
          eventsArray &&
          eventsArray.length > 0 &&
          eventsArray.map((a, i) => (
            <div key={i} className={style.boxItem}>
              <h3 className={style.titleLink}>
                <Link to={`${eventInfoUrl}?id=${a.id}`}>
                  {a.title}
                </Link>
              </h3>
              <p>{a.previewMessage}</p>
            </div>
          ))
        }

        {
          !isEvent &&
          newsArray &&
          newsArray.length > 0 &&
          newsArray.map((a, i) => (
            <div key={i} className={style.boxItem}>
              <h3 className={style.titleLink}>
                <Link to={`${newsInfoUrl}?id=${a.id}`}>
                  {a.title}
                </Link>
              </h3>
              <p>{a.context}</p>
            </div>
          ))

        }

        {/* <Load /> */}

      </div>

    </div>
  )
}

MyEventsMyNewsStateless.propTypes = {
  eventsArray: PropTypes.array,
  newsArray: PropTypes.array,
  isLoading: PropTypes.bool
}

export default MyEventsMyNewsStateless
