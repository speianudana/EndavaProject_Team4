import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'

export default function ContainerStateless(props) {
  const className = props.className ? props.className : ' '

  return (
    <div className={className}>
      <div className={style.container}>
        {props.children}
      </div>
    </div>
  )
}

ContainerStateless.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
