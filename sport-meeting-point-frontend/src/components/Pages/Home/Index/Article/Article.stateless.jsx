import React from 'react'
import style from './style.scss'
import { Link } from 'react-router-dom'
import { ButtonA } from '../../../../Layouts/Button'
import load1 from '../../../../../../static/loading_31-r.gif'
import load2 from '../../../../../../static/loading _aod0fa.gif'

function textTrim(txt) {
  return txt.substring(0, 200)
}

function ArticleStateless({ title, text, image }) {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainContainerChild}>
        <img style={{ filter: 'grayscale(100%)' }} src={image == '' ? load2 : image} className={style.imgStyle} alt="" />
      </div>
      <div style={{ flexDirection: 'column', }}
        className={style.mainContainerChild
        }>
        <p className={style.title}>{title}</p>
        <p className={style.text}>{textTrim(text)}</p>
        {/* <div className={style.containerForBtnAndMiniInfo}> */}
        <ButtonA title='More details...' className={style.btn} onClick={() => { console.log('test3291') }} />
        {/* </div> */}
      </div>
    </div>
  )
}

export default ArticleStateless
