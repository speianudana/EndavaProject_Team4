import React from 'react'
import { Container } from '../../../Layouts/Container'
import { FullPageLoading1 as Loading } from '../../../Layouts/Loading'
import style from '../style.scss'
import { ButtonA } from '../../../Layouts/Button'


const Msg = ({ message, loginClickHandle }) => (
  <React.Fragment>
    <p className={style.msg01} >
      {message}
    </p>
    <br />

    <ButtonA onClick={loginClickHandle} title="Login" />
  </React.Fragment>
)

export default function AccountActivatorStateless({ showLoadingFullpage, loginClickHandle }) {
  return (
    <React.Fragment>
      {showLoadingFullpage && <Loading />}
      <Container>
        <div className={style.card}>
          {!showLoadingFullpage
            && <Msg message={'Your account has been activated.'} loginClickHandle={loginClickHandle} />}


        </div>
      </Container>
    </React.Fragment>
  )
}
