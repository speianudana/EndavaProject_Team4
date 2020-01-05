import React from 'react'
import style from './style.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { index, about, loginUrl, userPageUrl } from '../../App/AppConstRoutes.js'
import { Container } from '../Container'
import { connect } from 'react-redux'

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
        <Link style={{ color: 'rgb(7, 197, 204)' }} to={userPageUrl} className={style.aClass}>
          {/* <Link to={userPageUrl} id={style.accountBtn}> */}
          {'My Profile'}
        </Link>
      </button>
    )
  }
}

AuthContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const ClickableItem = ({ to, title }) => (
  <button className={style.btnMenu}>
    <Link to={to} className={style.aClass}>
      {title}
    </Link>
  </button>
)

ClickableItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string
}

const MenuBtn = ({ clickHandler }) => (
  <button
    onClick={() => { clickHandler() }}
    id={style.btnDropdown} className={style.btnMenu}
  >
    ☰
  </button>
)

MenuBtn.propTypes = {
  clickHandler: PropTypes.func
}

function HeaderStateless(props) {
  const [dropdownIsVisible, setDropdownVisible] = React.useState(false)

  return (
    <Container className={style.containerMenu}>
      <div className={style.menu}>

        <div style={{ flexGrow: '4' }} className={style.menuElm}>
          <Link to={index} className={[style.logo].join(' ')}>
            Sport Meeting Point
          </Link>
        </div>

        <div style={{ flexGrow: '5' }} className={style.menuElm}>
          <ClickableItem to={index} title='Home' />
          <ClickableItem to={about} title='About' />
          <ClickableItem to={index} title='Contact' />
          <ClickableItem to={index} title='Feedback' />

        </div>

        <div style={{ flexGrow: '1' }} className={style.menuElm}>
          <AuthContainer isAuthenticated={props.isAuthenticated} />
        </div>

        <div style={{ flexGrow: '1' }} className={style.menuElm}>

          <MenuBtn clickHandler={() => { setDropdownVisible(!dropdownIsVisible) }} />

        </div>

      </div>

      <div className={style.sizeChecker}>
        <div style={{ display: dropdownIsVisible ? 'block' : 'none' }} className={style.dropDownMenu1}>
          <ClickableItem to={index} title='Home' />
          <ClickableItem to={about} title='About' />
          <ClickableItem to={index} title='Contact' />
          <ClickableItem to={index} title='Feedback' />
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
  isAuthenticated: PropTypes.bool,
  email: PropTypes.string
}

export default connect(mapStateToProps)(HeaderStateless)
