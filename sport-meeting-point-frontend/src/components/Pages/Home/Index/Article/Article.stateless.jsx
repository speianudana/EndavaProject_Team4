import React from 'react'
import style from './style.scss'
import { Link } from 'react-router-dom'
import { LoadingType1 } from '../../../../Layouts/Loading'
import { FaUser, FaCalendarCheck, FaMapMarkedAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { eventInfoUrl } from '../../../../App/AppConstRoutes'
import PropTypes from 'prop-types'

const Element = ({ children, color = '#818181', size = '13px' }) => (
  <IconContext.Provider value={{ color: color, size: size }}>
    <span style={{ margin: '5px' }}>
      {children}
    </span>
  </IconContext.Provider>
)

Element.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
  size: PropTypes.element
}

function imgShower(img) {
  switch (img) {
    case '':
      return <LoadingType1 />
    default:
      return <img src={img} className={style.imgStyle} alt='' />
  }
}

export default function ArticleStateless({ id, title, text, image }) {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainContainerChild}>
        {imgShower(image)}
      </div>
      <div
        className={style.mainContainerChild}
      >
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
            <Link to={`${eventInfoUrl}?id=${id}`} style={{ color: '#15AD72' }}>
              Read More »
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

ArticleStateless.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
}
