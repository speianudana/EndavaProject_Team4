import CustomAlertStateless from './CustomAlert.stateless.jsx'
import React from 'react'
import PropTypes from 'prop-types'

const CustomAlertOk = ({ message, onCloseHandler }) => (
  <CustomAlertStateless
    message={message}
    onCloseHandler={e => onCloseHandler(e)}
    type={1}
  />
)

CustomAlertOk.propTypes = {
  message: PropTypes.string,
  onCloseHandler: PropTypes.func
}

const CustomAlertError = ({ message, onCloseHandler }) => (
  <CustomAlertStateless
    message={message}
    onCloseHandler={e => onCloseHandler(e)}
    type={2}
  />
)

CustomAlertError.propTypes = {
  message: PropTypes.string,
  onCloseHandler: PropTypes.func
}

const CustomAlertWarning = ({ message, onCloseHandler }) => (
  <CustomAlertStateless
    message={message}
    onCloseHandler={e => onCloseHandler(e)}
    type={3}
  />
)

CustomAlertWarning.propTypes = {
  message: PropTypes.string,
  onCloseHandler: PropTypes.func
}

export { CustomAlertOk, CustomAlertError, CustomAlertWarning }
