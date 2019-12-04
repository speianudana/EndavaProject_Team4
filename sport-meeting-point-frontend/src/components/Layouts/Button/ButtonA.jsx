import React from 'react'
import scss from './style.scss'

const ButtonA = ({ title, className, onClick, style }) => {
  return (
    <button style={style} className={scss.btnA}>
      {title}
    </button>
  )
}


export default ButtonA