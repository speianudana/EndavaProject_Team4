import React, { useState } from 'react';
// import { Container, Row, Col, Button, BDiv, BH4, BHr, InputGroup } from 'bootstrap-4-react';
import { Link } from 'react-router-dom'
import { login } from '../../../App/AppConstRoutes.js'
import style from '../style.scss'
import { Container } from '../../../Layouts/Container'

function RegistrationStateless(props) {

  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })


  return (
    <React.Fragment>
      <Container>
        <div className={style.card}>
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

          <button className={style.btn1} onClick={() => {
            props.handleBtnRegistr(regData)
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
            props.errorMsgs.map((item, index) => {
              return <p style={{ color: 'red' }} key={index}>* {item}</p>
            })
          }

        </div>
      </Container>
    </React.Fragment>

  );
}


export default React.memo(RegistrationStateless)