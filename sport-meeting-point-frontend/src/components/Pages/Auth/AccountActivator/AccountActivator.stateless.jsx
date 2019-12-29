import React from 'react'
import { Container } from '../../../Layouts/Container'
import { FullPageLoading1 as Loading } from '../../../Layouts/Loading'
import style from '../style.scss'
import { ButtonA } from '../../../Layouts/Button'
import PropTypes from 'prop-types'

const Msg = ({ message, loginClickHandle }) => (
  <>
    <p className={style.msg01}>
      {message}
    </p>
    <br />

    <ButtonA onClick={loginClickHandle} title='Login' />
  </>
)

Msg.propTypes = {
  message: PropTypes.string,
  loginClickHandle: PropTypes.func
}

export default function AccountActivatorStateless ({ showLoadingFullpage, loginClickHandle }) {
  return (
    <>
      {showLoadingFullpage && <Loading />}
      <Container>
        <div className={style.card}>
          {!showLoadingFullpage &&
            <Msg message='Your account has been activated.' loginClickHandle={loginClickHandle} />}

        </div>
      </Container>
    </>
  )
}

AccountActivatorStateless.propTypes = {
  showLoadingFullpage: PropTypes.bool,
  loginClickHandle: PropTypes.func
}
