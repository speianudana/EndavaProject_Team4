import React from 'react'
import scss from './style.scss'
import PropTypes from 'prop-types'

const ButtonA = ({ title, className, onClick, style }) => {
  return (
    <button onClick={e => onClick(e)} style={style} className={`${scss.btnA} ${className}`}>
      {title}
    </button>
  )
}

ButtonA.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
}

export default ButtonA
