import React from 'react'
import style from './style.scss'
import example from '../../../../../../static/qq2.jpg'

function txtTrim(txt, maxLength = 800) {
  if (!txt) return ''
  return txt.length > maxLength ? txt.substring(0, maxLength - 3) + ' ...' : txt
}

function ArticleStateless({ title, text }) {
  return (
    <React.Fragment>
      <div className={style.mainContainer}>
        <p className={style.title}>
          {title}
        </p>
        <hr />
        <div className={style.body}>
          <img className={style.imgProps} src={example} alt="" />
          <div className={style.txtProps}>
            {txtTrim(text)}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ArticleStateless
