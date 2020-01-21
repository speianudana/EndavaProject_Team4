import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { Redirect } from 'react-router-dom'
import { newsInfoUrl } from '../../../../App/AppConstRoutes'
import { LoadingType1 } from '../../../../Layouts/Loading'

function titleCharacterCounter (str) {
  return str.length > 130 ? str.substring(0, 127) + '...' : str
}

function imgShower (img) {
  switch (img) {
    case null:
      return <LoadingType1 />
    default:
      return <img src={img} className={style.imgStyle} alt='' />
  }
}

function NewsStateless ({ title, text, img, id }) {
  const [redirectToInfoNews, setRedirectToInfoNews] = React.useState(false)

  if (redirectToInfoNews) {
    return <Redirect to={`${newsInfoUrl}?id=${id}`} />
  }

  return (
    <div onClick={() => setRedirectToInfoNews(false)} className={style.mainContainer}>

      <div className={style.mainContainerChild}>
        {imgShower(img)}
      </div>
      <p className={style.title}>{titleCharacterCounter(title)}</p>
      <br /><br />
      <p className={style.itemTextParagraph}>{text}</p>
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
