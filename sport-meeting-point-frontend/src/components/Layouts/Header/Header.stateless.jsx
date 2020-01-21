import React from 'react'
import style from './style.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { index, about, loginUrl, userPageUrl, userPageCreateEventUrl, contacts, userPageCreateNewsURL } from '../../App/AppConstRoutes.js'
import { Container } from '../Container'
import { connect } from 'react-redux'
import logof from '../../../../static/logof.png'

import {
  FaUser,
  FaHome,
  FaPhoneSquare,
  FaInfoCircle,
  FaCalendarAlt,
  FaNewspaper
} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Element = ({ children, color = '#818181', size = '13px' }) => (
  <IconContext.Provider value={{ color: color, size: size }}>
    <span style={{ margin: '5px' }}>
      {children}
    </span>
  </IconContext.Provider>
)

Element.propTypes = {
  children: PropTypes.any,
  color: PropTypes.any,
  size: PropTypes.any
}

const AuthContainer = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <button className={style.btnMenu}>
        <Link to={loginUrl} className={style.aClass}>
                    Sign In
        </Link>
      </button>
    )
  } else {
    return (
      <button className={style.btnMenu}>
        <Link to={userPageUrl} className={style.aClass}>
          <Element color='rgb(249, 168, 40)' size='25px'>
            <FaUser />
          </Element>
          <span style={{ fontSize: '22px' }}>
            My profile
          </span>

        </Link>
      </button>

    )
  }
}

AuthContainer.propTypes = {
  isAuthenticated: PropTypes.bool
}

const ClickableItem = ({ text = null, to, icon, handleClick }) => (
  <button onClick={e => handleClick(e)} className={style.btnMenu}>
    <Link to={to} className={style.aClass}>
      <Element color='rgb(249, 168, 40)' size='25px'>
        {icon}
      </Element>
      {text &&
        <span style={{ fontSize: '19px' }}>
          {text}
        </span>}
    </Link>
  </button>
)

ClickableItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.any,
  handleClick: PropTypes.any,
  text: PropTypes.string
}

const MenuBtn = ({ clickHandler }) => (
  <button
    onClick={() => {
      clickHandler()
    }}
    id={style.btnDropdown} className={style.btnMenu}
  >
        ☰
  </button>
)

MenuBtn.propTypes = {
  clickHandler: PropTypes.func
}

function HeaderStateless (props) {
  const [dropdownIsVisible, setDropdownVisible] = React.useState(false)

  return (
    <Container className={style.containerMenu}>
      <div className={style.menu}>

        <div style={{ flexGrow: '4' }} className={style.menuElm}>
          <Link to={index} className={[style.logo].join(' ')}>
            <img src={logof} alt='' height='75px' style={{ maxWidth: '100%' }} />
          </Link>
        </div>

        <div style={{ flexGrow: '6' }} className={style.menuElm}>
          <ClickableItem to={index} icon={<FaHome />} />
          <ClickableItem to={about} icon={<FaInfoCircle />} />
          <ClickableItem to={contacts} icon={<FaPhoneSquare />} />
          {props.isAuthenticated && <ClickableItem to={userPageCreateEventUrl} icon={<FaCalendarAlt />} />}
          {props.isAuthenticated && <ClickableItem to={userPageCreateNewsURL} icon={<FaNewspaper />} />}

        </div>

        <div style={{ flexGrow: '1' }} className={style.menuElm}>
          <AuthContainer isAuthenticated={props.isAuthenticated} />
        </div>

        <div style={{ flexGrow: '1' }} className={style.menuElm}>

          <MenuBtn clickHandler={() => {
            setDropdownVisible(!dropdownIsVisible)
          }}
          />

        </div>

      </div>

      <div className={style.sizeChecker}>
        <div style={{ display: dropdownIsVisible ? 'block' : 'none' }} className={style.dropDownMenu1}>
          <ClickableItem text='Home' to={index} icon={<FaHome />} />

          <ClickableItem text='About' to={about} icon={<FaInfoCircle />} />
          <ClickableItem text='Contacts' to={contacts} icon={<FaPhoneSquare />} />
          {props.isAuthenticated && <ClickableItem text='Create Event' to={userPageCreateEventUrl} icon={<FaCalendarAlt />} />}
          {props.isAuthenticated && <ClickableItem text='Create News' to={userPageCreateNewsURL} icon={<FaNewspaper />} />}

          <AuthContainer isAuthenticated={props.isAuthenticated} />
        </div>
      </div>

    </Container>
  )
}

const mapStateToProps = state => (
  {
    isAuthenticated: state.authenticationData.isAuthenticated,
    email: state.authenticationData.email
  }
)

HeaderStateless.propTypes = {
  isAuthenticated: PropTypes.bool
  // email: PropTypes.string
}

export default connect(mapStateToProps)(HeaderStateless)
