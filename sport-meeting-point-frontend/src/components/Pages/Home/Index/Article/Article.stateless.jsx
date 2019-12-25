import React from 'react'
import style from './style.scss'
import { Link } from 'react-router-dom'
import { LoadingType1 } from '../../../../Layouts/Loading'
import { FaUser, FaCalendarCheck, FaMapMarkedAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { event_info } from '../../../../App/AppConstRoutes'

const Element = ({ children, color = '#818181', size = '13px' }) => (
  <IconContext.Provider value={{ color: color, size: size }} >
    <span style={{ margin: '5px' }}>
      {children}
    </span>
  </IconContext.Provider>
)

function imgShower(img) {
  switch (img) {
    case '':
      return <LoadingType1 />
    default:
      return <img src={img} className={style.imgStyle} alt="" />
  }
}

function ArticleStateless({ title, text, image }) {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainContainerChild}>
        {imgShower(image)}
      </div>
      <div
        className={style.mainContainerChild
        }>
        <div className={style.mainContainerChildBox}>
          <p className={style.title}>{title}</p>
          <p className={style.textInfo}>


            <Element>
              <FaUser />
            </Element>

            Username

            <Element>
              <FaCalendarCheck />
            </Element>

            12.12.2011

            <Element>
              <FaMapMarkedAlt />
            </Element>

            St. Florilor 98 A

          </p>

          <hr className={style.hrProp} />

          <p className={style.text}>
            {text}
          </p>

          <div className={style.linkProp}>
            <Link to={event_info} style={{ color: '#15AD72' }}>
              Read More »
            </Link>
          </div>


        </div>
      </div>
    </div>
  )
}



export default ArticleStateless
