import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { IconContext } from 'react-icons'
import { IoMdCheckmark, IoMdClose, IoMdAlert } from 'react-icons/io'

const Icon = ({ item, color, size = '55px' }) => (
  <IconContext.Provider value={{ color: color, size: size }}>
    <span>
      {item}
    </span>
  </IconContext.Provider>
)

Icon.propTypes = {
  item: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string
}

function CustomAlertStateless ({ type = 1, message, onCloseHandler }) {
  return (
    <div className={style.container}>
      {
        type === 1 &&
          <Icon
            item={<IoMdCheckmark />}
            color='green'
          />

      }

      {
        type === 2 &&
          <Icon
            item={<IoMdClose />}
            color='red'
          />
      }

      {
        type === 3 &&
          <Icon
            item={<IoMdAlert />}
            color='yellow'
          />
      }

      <p className={style.content}>
        {message}
      </p>

      <button onClick={e => onCloseHandler(e)} className={style.close}>
        Close
      </button>

    </div>
  )
}

CustomAlertStateless.propTypes = {
  type: PropTypes.number,
  message: PropTypes.string,
  onCloseHandler: PropTypes.func
}

export default CustomAlertStateless
