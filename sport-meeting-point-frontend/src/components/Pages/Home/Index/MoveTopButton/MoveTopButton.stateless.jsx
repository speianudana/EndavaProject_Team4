import React from 'react'
import style from './style.scss'
import { IconContext } from 'react-icons'
import { IoIosArrowUp } from 'react-icons/io'


const Icon = ({ item, color = 'white', size = '55px' }) => (
  <IconContext.Provider value={{ color: color, size: size }}>
    <span >
      <IoIosArrowUp />
    </span>
  </IconContext.Provider>
)


const MoveTopButtonStateless = () => {
  return <button
    className={style.moveTopBtn}
    onClick={e => window.scrollTo(0, 0)}
  >
    <Icon />
  </button>

}

export default MoveTopButtonStateless
