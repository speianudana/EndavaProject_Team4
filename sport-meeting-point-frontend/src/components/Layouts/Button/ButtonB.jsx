import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

function ButtonB ({ title, onClickHandle }) {
  return <button className={style.btnB} onClick={e => onClickHandle(e)}>{title}</button>
}

ButtonB.propTypes = {
  title: PropTypes.string,
  onClickHandle: PropTypes.func
}

export default ButtonB
