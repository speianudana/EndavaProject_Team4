import React from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom'
import { index, login } from '../../App/AppConstRoutes.js'
import { Container } from '../Container'


function HeaderStateless() {

  const [dropdownIsVisible, setDropdownVisible] = React.useState(false)

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
            <button className={style.btnMenu}>
              <Link to={index} className={style.aClass} >
                Home
              </Link>
            </button>
            <button className={style.btnMenu}>
              <Link to={index} className={style.aClass} >
                About
              </Link>
            </button>
            <button className={style.btnMenu}>
              <Link to={index} className={style.aClass} >
                Contact
              </Link>
            </button>
            <button className={style.btnMenu}>
              <Link to={index} className={style.aClass} >
                Feedback
              </Link>
            </button>

          </div>

          <div style={{ flexGrow: '1' }} className={style.menuElm}>
            <button className={style.btnMenu}>
              <Link to={login} className={style.aClass} >
                Sign In
              </Link>
            </button>

          </div>

          <div style={{ flexGrow: '1' }} className={style.menuElm}>


            <button onClick={() => {
              setDropdownVisible(!dropdownIsVisible)
            }} id={style.btnDropdown} className={style.btnMenu
            }>
              ☰
            </button>



          </div>


        </div>

        <div className={style.sizeChecker}>
          <div style={{ display: dropdownIsVisible ? 'block' : 'none' }} className={style.dropDownMenu1}>
            <button className={style.btnMenu}>
              <Link to={index} className={style.aClass} >
                Home
              </Link>
            </button>
            <button className={style.btnMenu}>
              <Link to={index} className={style.aClass} >
                About
              </Link>
            </button>
            <button className={style.btnMenu}>
              <Link to={index} className={style.aClass} >
                Contact
              </Link>
            </button>
            <button className={style.btnMenu}>
              <Link to={index} className={style.aClass} >
                Feedback
              </Link>
            </button>
            <button className={style.btnMenu}>
              <Link to={login} className={style.aClass} >
                Sign In
              </Link>
            </button>
          </div>
        </div>

      </Container>

    </React.Fragment>
  );
}



export default React.memo(HeaderStateless)