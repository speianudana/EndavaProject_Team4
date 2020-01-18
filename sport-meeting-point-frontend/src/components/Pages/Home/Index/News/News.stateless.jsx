import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { Redirect } from 'react-router-dom'
import { newsInfoUrl } from '../../../../App/AppConstRoutes'

function titleCharacterCounter (str) {
  return str.length > 130 ? str.substring(0, 127) + '...' : str
}

function NewsStateless ({ title, text, img, id }) {
  const [redirectToInfoNews, setRedirectToInfoNews] = React.useState(false)

  if (redirectToInfoNews) { return <Redirect to={`${newsInfoUrl}?id=${id}`} /> }

  return (
    <div onClick={() => setRedirectToInfoNews(true)} className={style.itemContainer}>
      <img src={img} className={style.img} alt='' />
      <div className={style.itemTitle}>
        {titleCharacterCounter(title)}
      </div>

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
