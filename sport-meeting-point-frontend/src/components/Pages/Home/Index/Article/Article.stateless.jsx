import React from 'react'
import style from './style.scss'
import { ButtonA } from '../../../../Layouts/Button'
import { LoadingType1 } from '../../../../Layouts/Loading'




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
      <div style={{ flexDirection: 'column', }}
        className={style.mainContainerChild
        }>
        <p className={style.title}>{title}</p>
        <p className={style.text}>{text}</p>

        <ButtonA title='More details...' className={style.btn} onClick={() => { console.log('test3291') }} />

      </div>
    </div>
  )
}



export default ArticleStateless
