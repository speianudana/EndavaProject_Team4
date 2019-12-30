import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

function characterCounter (str) {
  return str.length > 340 ? str.substring(0, 340) + '...' : str
}

function NewsStateless ({ title, text }) {
  return (
    <div className={style.itemContainer}>
      <div className={style.itemTitle}>
        {title}
      </div>
      <div className={style.itemText}>
        {characterCounter(text)}
      </div>

    </div>
  )
}

NewsStateless.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default NewsStateless
