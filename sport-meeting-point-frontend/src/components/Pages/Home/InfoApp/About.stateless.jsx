import React from 'react'
import PropTypes from 'prop-types'
import style from "./style.css"
import e1 from "../../../../../static/e1.jpg"
import news from "../../../../../static/news.png"
import event from "../../../../../static/event.jpg"
import participate from "../../../../../static/participate.jpg"
import {Link} from "react-router-dom"
import { CustomAlertError } from '../../../Layouts/CustomAlert'
import {userPageCreateNewsURL} from '../../../App/AppConstRoutes'
import {userPageCreateEventUrl} from '../../../App/AppConstRoutes'
import {index} from '../../../App/AppConstRoutes'

function AboutStateless ({ children }) {
  return (
      <div className={style.container} >
          <h2 className={style.about}>Why our app is useful</h2>
<div className={style.cards}>


    <Link to={userPageCreateNewsURL} className={style.card}>
        <span className={style.cardHeader} >
            <img src={news}  width={"100%"} height={"100%"} alt=""/>
          <span className={style.cardTitle}>
            <h3>Create news</h3>
          </span>
        </span>
        <span className={style.cardSummary}>
You can use this app to share some news related to some sport, interesting facts, results of matches or successful sportsmen.        </span>

    </Link>


    <Link to={userPageCreateEventUrl}  className={style.card}>
        <span className={style.cardHeader} >
            <img src={event}  width={"100%"} height={"100%"} alt=""/>
          <span className={style.cardTitle}>
            <h3>Create events</h3>
          </span>
        </span>
        <span className={style.cardSummary}>
You can create sport events in order to gather teams for good games. </span>

    </Link>
    <Link to={index} className={style.card}>
        <span className={style.cardHeader} >
            <img src={participate}  width={"100%"} height={"100%"} alt=""/>
          <span className={style.cardTitle}>
            <h3>Participate at events</h3>
          </span>
        </span>
        <span className={style.cardSummary}>
You can participate at any event you want in order to enjoy your free time!        </span>
    </Link>


</div>
      </div>

  )
}

AboutStateless.propTypes = {
  children: PropTypes.node
}

export default AboutStateless
