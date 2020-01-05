import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { LoadingType1 as Load } from '../../../Layouts/Loading'
import { Link } from 'react-router-dom'
import { eventInfoUrl } from '../../../App/AppConstRoutes'

function MyEventsMyNewsStateless({ eventsArray, newsArray, isLoading }) {

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

        {/* <div className={style.boxItem}>
          <h3 className={style.titleLink}>Lorem ipsum dolor sit.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi minima ducimus?</p>
        </div> */}

        {
          isEvent
          && eventsArray
          && eventsArray.length > 0
          && eventsArray.map((a, i) => (
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
          !isEvent
          && newsArray
          && newsArray.length > 0
          && newsArray.map((a, i) => (
            <div key={i} className={style.boxItem}>
              <h3 className={style.titleLink}>{a.title}</h3>
              <p>{a.text}</p>
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
  newsArray: PropTypes.array
}

export default MyEventsMyNewsStateless

