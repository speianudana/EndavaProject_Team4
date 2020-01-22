import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { Redirect } from 'react-router-dom'
import { newsInfoUrl } from '../../../../App/AppConstRoutes'
import { LoadingType1 } from '../../../../Layouts/Loading'
import { Link } from 'react-router-dom'
import * as categoryDict from 'data/SportCategories/SportCategories.dictionary'

function titleCharacterCounter(str) {
  return str.length > 130 ? str.substring(0, 127) + '...' : str
}

function imgShower(img) {
  switch (img) {
    case null:
      return <LoadingType1 />
    default:
      return <img src={img} className={style.imgStyle} alt='' />
  }
}

function NewsStateless({ title, text, category, img, id }) {
  const [redirectToInfoNews, setRedirectToInfoNews] = React.useState(false)

  if (redirectToInfoNews) {
    return <Redirect to={`${newsInfoUrl}?id=${id}`} />
  }

  return (

    <div className={style.mainContainer}>
      <div className={style.mainContainerChild}>
        {imgShower(img)}
      </div>
      <div
        className={style.mainContainerChild}
      >
        <div className={style.mainContainerChildBox}>
          <p className={style.title}>{title}</p>
          <p className={style.textInfo}>
            {categoryDict.keyToValue(category).eng}

          </p>

          {/* <hr className={style.hrProp} /> */}

          <p className={style.text}>
            {text}
          </p>

          <div className={style.linkProp}>
            <Link to={`${newsInfoUrl}?id=${id}`} style={{ color: '#15AD72' }}>
              Read More »
            </Link>
          </div>

        </div>
      </div>
    </div>

  )
}

NewsStateless.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.any,
  id: PropTypes.number
}

export default NewsStateless
