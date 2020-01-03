import CustomAlertStateless from './CustomAlert.stateless.jsx'
import React from 'react'

const CustomAlertOk = ({ message, onCloseHandler }) => (
  <CustomAlertStateless
    message={message}
    onCloseHandler={e => onCloseHandler(e)}
    type={1}
  />
)

const CustomAlertError = ({ message, onCloseHandler }) => (
  <CustomAlertStateless
    message={message}
    onCloseHandler={e => onCloseHandler(e)}
    type={2}
  />
)

const CustomAlertWarning = ({ message, onCloseHandler }) => (
  <CustomAlertStateless
    message={message}
    onCloseHandler={e => onCloseHandler(e)}
    type={3}
  />
)

export { CustomAlertOk, CustomAlertError, CustomAlertWarning }