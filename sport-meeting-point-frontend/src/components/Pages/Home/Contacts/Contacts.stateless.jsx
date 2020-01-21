import React from 'react'
import PropTypes from 'prop-types'
import style from "./style.css"
import {FaGithub} from 'react-icons/fa'
import dana from '../../../../../static/dana.jpg'
import ion from '../../../../../static/ion.png'

import {Link} from "react-router-dom";
import {IconContext} from "react-icons";


const Element = ({ children, color, size = '13px' }) => (
    <IconContext.Provider value={{ color: color, size: size }}>
    <span style={{ margin: '5px' }}>
      {children}
    </span>
    </IconContext.Provider>
)

const ClickableItem = ({ to, icon, handleClick }) => (
    <button onClick={e=>handleClick(e)} className={style.btnMenu}>
        <Link to={to} className={style.aClass}>
            <Element color={'black'} size={'33px'}>
                {icon}
            </Element>
        </Link>
    </button>
)
function ContactsStateless({children}) {
    return (
        <div className={style.container}>
            <h2 className={style.about}>About us</h2>
            <div className={style.cards}>

                <div className={style.card}>
                    <span className={style.cardHeader}>
                        <img src={ion} width={"100%"} height={"100%"} alt=""/>
                         <span className={style.cardTitle}>
                             <h3>Postu Ivan</h3>
                          </span>
                    </span>
                    <span className={style.cardSummary}>
                        <ul>
                            <li>Speciality: Informational Security</li>
                            <li> University: Technical University of Moldova</li>
                            <li> <ClickableItem icon={<FaGithub/>} to={"https://github.com/IvanPostu"} handleClick={(e) => {location.replace('https://github.com/IvanPostu')}}/>
                                    <ClickableItem icon={"https://github.com/IvanPostu"} to={"https://github.com/IvanPostu"} handleClick={(e) => {location.replace('https://github.com/IvanPostu')}}/>
                            </li>
                        </ul>
                     </span>

                </div>

                <div className={style.card}>
                    <span className={style.cardHeader}>
                        <img src={dana} width={"100%"} height={"100%"} alt=""/>
                         <span className={style.cardTitle}>
                             <h3>Speianu Dana</h3>
                          </span>
                    </span>
                    <span className={style.cardSummary}>
                        <ul>
                            <li>Speciality: Software Engineering</li>
                            <li> University: Technical University of Moldova</li>
                            <li> <ClickableItem icon={<FaGithub/>} to={"https://github.com/speianudana"} handleClick={(e) => {location.replace('https://github.com/speianudana')}}/>
                                    <ClickableItem icon={"https://github.com/speianudana"} to={"https://github.com/speianudana"} handleClick={(e) => {location.replace('https://github.com/speianudana')}}/>
                            </li>
                        </ul>
                     </span>

                </div>

            </div>
        </div>

    )
}

ContactsStateless.propTypes = {
    children: PropTypes.node
}

export default ContactsStateless
