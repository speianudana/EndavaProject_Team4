import React from 'react'
import PropTypes from 'prop-types'
import { CustomAlertError } from '../../../Layouts/CustomAlert'

function AboutStateless ({ children }) {
  return (
    <div>
      <h1 style={{ color: 'white' }}>This is about</h1>
      <CustomAlertError
        message='Hello world'
        onCloseHandler={(e) => alert(1)}
      />
    </div>
  )
}

AboutStateless.propTypes = {
  children: PropTypes.node
}

export default AboutStateless
