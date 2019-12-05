import React from 'react'
import style from './style.scss'
import { ButtonA } from '../../../../Layouts/Button'
import TellAboutUs from './TellAboutUs.jsx'

function movePageBotton() {

  const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;


  window.scrollTo(0, height + 42);//42 top bar height
}

function HeaderStateless(props) {
  return (
    <div id={style.mainBlock}>

      <div id={style.mainBlock1}>
        <div className={style.centredContainer}>
          <p id={style.title} >Wellcome <br /></p>
          <p id={style.text} style={{ marginTop: '10px' }}>
            IT'S NICE TO MEET YOU
          </p>
          <ButtonA
            style={{ margin: '10px 0 65px 0' }}
            title={'See more'}
            onClick={e => movePageBotton()}
          />

          <TellAboutUs />

        </div>
      </div>


    </div>
  )
}


export default HeaderStateless