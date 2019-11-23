import React from 'react'
import style from './style.scss'

export default function ContainerStateless(props) {
  let className = props.className ? props.className : ' '

  return (
    <div className={className}>
      <div className={style.container}>
        {props.children}
      </div>
    </div>
  )
}
