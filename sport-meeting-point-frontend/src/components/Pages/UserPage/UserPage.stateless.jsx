import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../Layouts/Container'
import style from './style.scss'
import unauthUserImg from '../../../../static/unauth_usr.png'
// import { tokenWorker } from '../../../utils/token-worker'

// const signOut = () => {
//   tokenWorker.deleteTokenFromLocalStorage()
//   console.log(1)
// }

const UserPageStateless = ({ signOut }) => {
  return (
    <Container >
      <main className={style.main}>


        <div className={style.item}>
          <div className={style.miniItem}>
            <img id={style.userImg} src={unauthUserImg} alt="" />
          </div>
          <div className={style.miniItem}>
            <button className={`${style.btn} ${style.simpleBtn}`}>Load user image</button>
            <button className={`${style.btn} ${style.simpleBtn}`}>Reset personal data</button>
            <button onClick={() => signOut()} id={style.exitBtn} className={style.btn}>Exit</button>
          </div>
        </div>

        <div className={style.item}>
          <div className={style.miniItem}>
            <h3>Personal data:</h3>
          </div>
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
