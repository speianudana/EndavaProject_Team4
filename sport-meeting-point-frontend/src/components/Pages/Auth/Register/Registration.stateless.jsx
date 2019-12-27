import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUrl } from '../../../App/AppConstRoutes.js'
import style from '../style.scss'
import { Container } from '../../../Layouts/Container'
import PropTypes from 'prop-types'

function RegistrationStateless({ handleBtnRegistr, errorMsgs, expectConfirmationEmail }) {
  return (
    <>
      <Container>
        <div className={style.card}>

          {!expectConfirmationEmail && <RegistrationDataForm handleBtnRegistr={handleBtnRegistr} errorMsgs={errorMsgs} />}
          {expectConfirmationEmail && <ExpectConfirmationEmail />}

        </div>
      </Container>
    </>

  )
}

RegistrationStateless.propTypes = {
  handleBtnRegistr: PropTypes.func,
  errorMsgs: PropTypes.array,
  expectConfirmationEmail: PropTypes.bool
}

const ExpectConfirmationEmail = p => {
  return (
    <p className={style.msg01}>
      To complete the registration, follow the link sent in the letter by mail
    </p>
  )
}

const RegistrationDataForm = React.memo(({ handleBtnRegistr, errorMsgs }) => {
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })

  return (
    <>
      <div className={style.loginOrRegistrationBtn}>
        <Link to={loginUrl}>Log In</Link> / Registration
      </div>

      <p>Firstname:</p>
      <input
        className={style.inputType1} type='text'
        onChange={e => setRegData({ ...regData, firstName: e.target.value })}
        value={regData.firstName}
      />
      <br />
      <br />
      <p>Lastname:</p>
      <input
        className={style.inputType1} type='text'
        onChange={e => setRegData({ ...regData, lastName: e.target.value })}
        value={regData.lastName}
      />
      <br />
      <br />
      <p>Email:</p>
      <input
        className={style.inputType1} type='text'
        onChange={e => setRegData({ ...regData, email: e.target.value })}
        value={regData.email}
      />
      <br />
      <br />
      <p>Password:</p>
      <input
        className={style.inputType1} type='password'
        onChange={e => setRegData({ ...regData, password: e.target.value })}
        value={regData.password}
      />
      <br />
      <br />
      <p>Password repeat:</p>
      <input
        className={style.inputType1} type='password'
        onChange={e => setRegData({ ...regData, passwordRepeat: e.target.value })}
        value={regData.passwordRepeat}
      />
      <br />
      <br />

      <button
        disabled={regData.password !== regData.passwordRepeat} className={style.btn1} onClick={() => {
          handleBtnRegistr(regData)
          setRegData({
            ...regData,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordRepeat: ''
          })
        }}
      >
        Registration
      </button>

      <br />
      <br />
      <br />

      {
        regData.password !== regData.passwordRepeat &&
        // eslint-disable-next-line react/jsx-indent
        <p className={style.errorMsg}>*Password and password repeat is not equal.</p>
      }

      {
        // eslint-disable-next-line react/prop-types
        errorMsgs.map((item, index) => {
          return <p className={style.errorMsg} key={index}>* {item}</p>
        })
      }
    </>
  )
})

RegistrationDataForm.propTypes = {
  handleBtnRegistr: PropTypes.func,
  errorMsgs: PropTypes.array
}

export default RegistrationStateless
