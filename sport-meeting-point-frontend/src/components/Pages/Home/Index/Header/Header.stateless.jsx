import React from 'react'
import { Container } from '../../../../Layouts/Container'
import style from './style.scss'
import img1 from '../../../../../../static/qq1.jpg'
import img2 from '../../../../../../static/qq2.jpg'


const Button = ({ title }) => {

  return (
    <button className={style.btn}>
      {title}
    </button>
  )

}

export default function HeaderStateless() {
  return (
    <React.Fragment>
      <div id={style.mainBlock}>
        <div id={style.mainBlock1}>
          <div className={style.centredContainer}>
            <p id={style.title}>Wellcome <br /></p>
            <p id={style.text}>
              IT'S NICE TO MEET YOU
          </p>
            <Button title="News" />
            <Button title="Events" />
          </div>

        </div>
        {/* <img id={style.mainImg} src={img1} alt="error" width="100%" height="100%" /> */}
        {/* <div id={style.mainImg}></div> */}

      </div>

    </React.Fragment>
  )
}
