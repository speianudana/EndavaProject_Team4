import React, { } from 'react'
import style from './TellAboutUs.scss'
import { IconContext } from 'react-icons'
import { FaFacebook, FaVk, FaGithub, FaTelegram } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Element = ({ children, color = '#c7beec', size = '55px' }) => (
  <IconContext.Provider value={{ color: color, size: size }}>
    <span className={style.iconItem}>
      {children}
    </span>
  </IconContext.Provider>
)

Element.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
  size: PropTypes.string
}

function TellAboutUs () {
  return (
    <div id={style.container}>
      <span className={style.text}>Tell About Us: </span>
      <Element>
        <FaVk />
      </Element>
      <Element>
        <FaFacebook />
      </Element>
      <Element>
        <FaGithub />
      </Element>
      <Element>
        <FaTelegram />
      </Element>
    </div>
  )
}

export default TellAboutUs
