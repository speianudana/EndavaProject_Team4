import React from 'react'
import style from './style.scss'
import example from '../../../../../../static/qq2.jpg'
import { Link } from 'react-router-dom'

function txtTrim(txt, maxLength = 800) {
  if (!txt) return ''
  return txt.length > maxLength ? txt.substring(0, maxLength - 3) + '  ' : txt
}

function ArticleStateless({ title, text }) {
  return (
    <React.Fragment>
      <div className={style.mainContainer}>
        <p className={style.title}>
          {title}
        </p>
        <div className={style.body}>
          <img className={style.imgProps} src={example} alt="" />
          <div className={style.txtProps}>
            {txtTrim(text)}
            <Link className={style.link} to="/">See more...</Link>
          </div>
        </div>
        <div className={style.footer}>
          <button className={style.btn} style={{ flexGrow: '1' }}>Info</button>
          <button className={style.btn} style={{ flexGrow: '1' }}>Participate</button>
          <p className={style.addedBy} style={{ flexGrow: '8' }}>
            <br />
            Added by: FirstName LastName
            <br />
            Date: 29.01.1009
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ArticleStateless
