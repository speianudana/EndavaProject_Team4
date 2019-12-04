import React from 'react'
import scss from './style.scss'

const ButtonA = ({ title, className, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className={scss.btnA}>
      {title}
    </button>
  )
}


export default ButtonA