import React from 'react'
import { Container } from '../../../../Layouts/Container'
import style from './style.scss'

import img1 from '../../../../../../static/e1.jpg'
import img2 from '../../../../../../static/e2.jpg'
import img3 from '../../../../../../static/e3.jpg'
import img4 from '../../../../../../static/e4.jpg'
import img5 from '../../../../../../static/e5.jpg'
import img6 from '../../../../../../static/e6.jpg'

export default function SubHeaderStateless() {
  return (
    <React.Fragment>

      <div className={style.mainContainer}>
        <div className={style.itemContainer}>
          <img className={style.img} src={img1} alt="" />
        </div>
        <div className={style.itemContainer}>
          <img className={style.img} src={img2} alt="" />
        </div>
        <div className={style.itemContainer}>
          <img className={style.img} src={img3} alt="" />
        </div>
        <div className={style.itemContainer}>
          <img className={style.img} src={img4} alt="" />
        </div>
        <div className={style.itemContainer}>
          <img className={style.img} src={img5} alt="" />
        </div>
        <div className={style.itemContainer}>
          <img className={style.img} src={img6} alt="" />
        </div>

      </div>

    </React.Fragment>
  )
}
