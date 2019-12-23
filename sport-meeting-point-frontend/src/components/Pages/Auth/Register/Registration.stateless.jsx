import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { login } from '../../../App/AppConstRoutes.js'
import style from '../style.scss'
import { Container } from '../../../Layouts/Container'

function RegistrationStateless({ handleBtnRegistr, errorMsgs }) {


  return (
    <React.Fragment>
      <Container>
        <div className={style.card}>

          <RegistrationDataForm handleBtnRegistr={handleBtnRegistr} errorMsgs={errorMsgs} />



        </div>
      </Container>
    </React.Fragment>

  );
}


const RegistrationDataForm = React.memo(({ handleBtnRegistr, errorMsgs }) => {

  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })

  return <React.Fragment>
    <div className={style.loginOrRegistrationBtn}>
      <Link to={login}>Log In</Link> / Registration
          </div >

    <p>Firstname:</p>
    <input className={style.inputType1} type="text"
      onChange={e => setRegData({ ...regData, firstName: e.target.value })}
      value={regData.firstName} />
    <br />
    <br />
    <p>Lastname:</p>
    <input className={style.inputType1} type="text"
      onChange={e => setRegData({ ...regData, lastName: e.target.value })}
      value={regData.lastName} />
    <br />
    <br />
    <p>Email:</p>
    <input className={style.inputType1} type="text"
      onChange={e => setRegData({ ...regData, email: e.target.value })}
      value={regData.email} />
    <br />
    <br />
    <p>Password:</p>
    <input className={style.inputType1} type="password"
      onChange={e => setRegData({ ...regData, password: e.target.value })}
      value={regData.password} />
    <br />
    <br />
    <p>Password repeat:</p>
    <input className={style.inputType1} type="password"
      onChange={e => setRegData({ ...regData, passwordRepeat: e.target.value })}
      value={regData.passwordRepeat} />
    <br />
    <br />

    <button disabled={regData.password != regData.passwordRepeat} className={style.btn1} onClick={() => {
      handleBtnRegistr(regData)
      setRegData({
        ...regData,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRepeat: ''
      })
    }}>
      Registration
         </button>

    <br />
    <br />
    <br />

    {
      regData.password != regData.passwordRepeat
      && <p style={{ color: 'red' }} >*Password and password repeat is not equal.</p>
    }

    {
      errorMsgs.map((item, index) => {
        return <p style={{ color: 'red' }} key={index}>* {item}</p>
      })
    }
  </React.Fragment>
})



export default RegistrationStateless