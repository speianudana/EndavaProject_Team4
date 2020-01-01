import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

function titleCharacterCounter (str) {
  return str.length > 130 ? str.substring(0, 127) + '...' : str
}

function NewsStateless ({ title, text, img }) {
  return (
    <div className={style.itemContainer}>
      {/* <div className={style.itemTitle}>
        {title}
      </div>
      <div className={style.itemText}>
        {characterCounter(text)}
      </div> */}
      <img src={img} className={style.img} alt='' />
      <div className={style.itemTitle}>
        {titleCharacterCounter(title)}
      </div>
    </div>
  )
}

NewsStateless.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default NewsStateless
