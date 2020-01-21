import React from 'react'
import style from './style.scss'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {index, about, loginUrl, userPageUrl, userPageCreateEventUrl} from '../../App/AppConstRoutes.js'
import {Container} from '../Container'
import {connect} from 'react-redux'
import logof from "../../../../static/logof.png"
import {contacts, userPageCreateNewsURL} from "../../App/AppConstRoutes";
import {
    FaUser,
    FaHome,
    FaPhoneSquare,
    FaInfoCircle,
    FaCalendarAlt,
    FaNewspaper,
    FaPlus,
    FaCalendar
} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import {mapStateToPops} from '../../Pages/UserPage/UserPage.statefull.jsx'

let i = 0;

const Element = ({children, color = '#818181', size = '13px'}) => (
    <IconContext.Provider value={{color: color, size: size}}>
    <span style={{margin: '5px'}}>
      {children}
    </span>
    </IconContext.Provider>
)

const AuthContainer = ({isAuthenticated}) => {
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
            <button  className={style.btnMenu}>
                <Link to={userPageUrl} className={style.aClass}>
                    <Element color={'rgb(249, 168, 40)'} size={'25px'}>
                        {<FaUser/>}
                    </Element>
                    <Element color={'rgb(249, 168, 40)'} size={'20px'}>
                        {"My profile"}
                    </Element>

                </Link>
            </button>

        )
    }
}

AuthContainer.propTypes = {
    isAuthenticated: PropTypes.bool
}

const CreateNewsIcon = ({to, icon1, icon2, handleClick, isAuthenticated}) => {
    if (isAuthenticated) {
        return (
            <button onClick={e => handleClick(e)} className={style.btnMenu}>
                <Link to={to} className={style.aClass}>
                    <Element color={'rgb(249, 168, 40)'} size={'25px'}>
                        {icon1}
                    </Element>
                    <Element color={'rgb(249, 168, 40)'} size={'15px'}>
                        {icon2}
                    </Element>

                </Link>
            </button>
        )
    }
}

CreateNewsIcon.propTypes = {
    to: PropTypes.string,

    isAuthenticated: PropTypes.bool
}
const NewsEventsToCreate = ({isAuthenticated}) => {
    if (isAuthenticated) {
        return (<div><CreateNewsIcon to={userPageCreateEventUrl} icon1={<FaCalendarAlt/>} icon2={<FaPlus/>}
                                     isAuthenticated={isAuthenticated}/>
                <CreateNewsIcon to={userPageCreateNewsURL} icon1={<FaNewspaper/>} icon2={<FaPlus/>}
                                isAuthenticated={isAuthenticated}/></div>


        )
    } else {
        return (
            <Link style={{color: 'rgb(249, 168, 40)'}} to={userPageUrl} className={style.aClass}>
                <ClickableItem to={index} icon={<FaCalendar/>}/>
                <h3 color={"black"}> {mapStateToPops.firstName}{mapStateToPops.lastName}</h3>

            </Link>

        )
    }

}


const ClickableItem = ({to, icon, handleClick}) => (
    <button onClick={e => handleClick(e)} className={style.btnMenu}>
        <Link to={to} className={style.aClass}>
            <Element color={'rgb(249, 168, 40)'} size={'25px'}>
                {icon}
            </Element>

        </Link>
    </button>
)

ClickableItem.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string
}

const MenuBtn = ({clickHandler}) => (
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

function HeaderStateless(props) {
    const [dropdownIsVisible, setDropdownVisible] = React.useState(false)

    return (
        <Container className={style.containerMenu}>
            <div className={style.menu}>

                <div style={{flexGrow: '4'}} className={style.menuElm}>
                    <Link to={index} className={[style.logo].join(' ')}>
                        <img src={logof} alt="" height={"75px"}/> </Link>
                </div>

                <div style={{flexGrow: '6'}} className={style.menuElm}>
                    <ClickableItem to={index} icon={<FaHome/>}/>
                    <ClickableItem to={about} icon={<FaInfoCircle/>}/>
                    <ClickableItem to={contacts} icon={<FaPhoneSquare/>}/>
                    <NewsEventsToCreate isAuthenticated={props.isAuthenticated}/>

                </div>

                <div style={{flexGrow: '1'}} className={style.menuElm}>
                    <AuthContainer isAuthenticated={props.isAuthenticated}/>
                </div>

                <div style={{flexGrow: '1'}} className={style.menuElm}>

                    <MenuBtn clickHandler={() => {
                        setDropdownVisible(!dropdownIsVisible)
                    }}/>

                </div>

            </div>

            <div className={style.sizeChecker}>
                <div style={{display: dropdownIsVisible ? 'block' : 'none'}} className={style.dropDownMenu1}>
                    <ClickableItem to={index} icon={<FaHome/>}/>
                    <ClickableItem to={about} icon={<FaInfoCircle/>}/>
                    <ClickableItem to={contacts} icon={<FaPhoneSquare/>}/>
                    <AuthContainer isAuthenticated={props.isAuthenticated}/>
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
