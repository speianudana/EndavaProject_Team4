import React from 'react'
import style from './Loading01.scss'

export default function Loading01Stateless () {
  return (
    <div id={style.loadingBase}>
      <h1 className={style.animate}>
        Loading
      </h1>
    </div>
  )
}
