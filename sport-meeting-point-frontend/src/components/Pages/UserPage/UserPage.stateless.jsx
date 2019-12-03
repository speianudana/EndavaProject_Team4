import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../Layouts/Container'
import style from './style.scss'
import unauthUserImg from '../../../../static/unauth_usr.png'

const UserPageStateless = props => {
  return (
    <Container >
      <main className={style.main}>
        {/* <div className={style.item} >
          <img id={style.userImg} src={unauthUserImg} alt="" />
        </div>
        <div className={style.item} ></div>
        <div className={style.item} ></div>
        <div className={style.item} ></div>
        <div className={style.item} >
          
        </div> */}

        <div className={style.item}>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fuga inventore blanditiis nulla animi tempora minima minus, voluptatum voluptatem eum molestiae? Molestiae?</p> */}
          <div className={style.miniItem}>
            <img id={style.userImg} src={unauthUserImg} alt="" />
          </div>
          <div className={style.miniItem}>
            <button className={`${style.btn} ${style.simpleBtn}`}>Load user image</button>
            <button className={`${style.btn} ${style.simpleBtn}`}>Reset personal data</button>
            <button id={style.exitBtn} className={style.btn}>Exit</button>
          </div>
        </div>

        <div className={style.item}>
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quasi nesciunt tempora tenetur, voluptatem aspernatur dolor inventore esse amet possimus distinctio corrupti. Nostrum recusandae, rem aperiam ullam cumque sapiente beatae maxime dolores. */}
          <div className={style.miniItem}></div>
          <div className={style.miniItem}></div>
          <div className={style.miniItem}></div>

        </div>

      </main>
    </Container >
  )
}

UserPageStateless.propTypes = {

}

export default UserPageStateless
