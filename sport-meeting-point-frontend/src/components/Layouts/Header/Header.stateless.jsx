import React from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom'
import { index, login } from '../../App/AppConstRoutes.js'
import { Container } from '../Container'
import { useSelector, connect } from 'react-redux'
// import {} from '../../UserData/UserPersonalData/UserPersonalData.action.jsx'


const AuthContainer = ({ isAuthenticated, email }) => {

  if (!isAuthenticated)
    return (
      <button className={style.btnMenu}>
        <Link to={login} className={style.aClass} >
          Sign In
              </Link>
      </button>
    )

  return (
    <button className={style.btnMenu}>

      <Link to={login} id={style.accountBtn} >
        {email}
      </Link>
    </button>
  )

}

const ClickableItem = ({ to, title }) => (<button className={style.btnMenu}>
  <Link to={to} className={style.aClass} >
    {title}
  </Link>
</button>)

const MenuBtn = ({ clickHandler }) => (
  <button onClick={() => { clickHandler() }}
    id={style.btnDropdown} className={style.btnMenu}>
    ☰
  </button>)

function HeaderStateless(props) {

  const [dropdownIsVisible, setDropdownVisible] = React.useState(false)


  console.log("aefdadf:", props)

  return (
    <React.Fragment>
      <Container className={style.containerMenu} >
        <div className={style.menu} >

          <div style={{ flexGrow: '4' }} className={style.menuElm}>
            <Link to={index} className={[style.logo].join(' ')}>
              Sport Meeting Point
            </Link>
          </div>

          <div style={{ flexGrow: '5' }} className={style.menuElm}>
            <ClickableItem to={index} title='Home' />
            <ClickableItem to={index} title='About' />
            <ClickableItem to={index} title='Contact' />
            <ClickableItem to={index} title='Feedback' />

          </div>

          <div style={{ flexGrow: '1' }} className={style.menuElm}>
            <AuthContainer isAuthenticated={props.isAuthenticated} email={props.email} />
          </div>

          <div style={{ flexGrow: '1' }} className={style.menuElm}>


            {/* <button onClick={() => {
              setDropdownVisible(!dropdownIsVisible)
            }} id={style.btnDropdown} className={style.btnMenu
            }>
              ☰
            </button> */}
            <MenuBtn clickHandler={() => { setDropdownVisible(!dropdownIsVisible) }} />


          </div>


        </div>

        <div className={style.sizeChecker}>
          <div style={{ display: dropdownIsVisible ? 'block' : 'none' }} className={style.dropDownMenu1}>
            <ClickableItem to={index} title='Home' />
            <ClickableItem to={index} title='About' />
            <ClickableItem to={index} title='Contact' />
            <ClickableItem to={index} title='Feedback' />
            <AuthContainer isAuthenticated={props.isAuthenticated} email={props.email} />
          </div>
        </div>

      </Container>

    </React.Fragment>
  );
}


function mapStateToProps(state) {
  return {
    email: state.userPersonalData.email,
    isAuthenticated: state.userPersonalData.isAuthenticated
  }
}


export default connect(mapStateToProps)(React.memo(HeaderStateless))