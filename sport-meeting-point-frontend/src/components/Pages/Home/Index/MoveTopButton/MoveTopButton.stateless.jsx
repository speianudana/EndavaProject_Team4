import React from 'react'
import style from './style.scss'
import { IconContext } from 'react-icons'
import { IoIosArrowUp } from 'react-icons/io'
import PropTypes from 'prop-types'

const Icon = ({ color = 'white', size = '55px' }) => (
  <IconContext.Provider value={{ color: color, size: size }}>
    <span>
      <IoIosArrowUp />
    </span>
  </IconContext.Provider>
)

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

const MoveTopButtonStateless = () => {
  return (
    <button
      className={style.moveTopBtn}
      onClick={e => window.scrollTo(0, 0)}
    >
      <Icon />
    </button>)
}

export default MoveTopButtonStateless
