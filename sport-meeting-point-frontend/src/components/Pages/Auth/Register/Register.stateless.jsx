import React, { useState } from 'react';
import { Container, Row, Col, Button, BDiv, BH4, BHr, InputGroup } from 'bootstrap-4-react';
import { Link } from 'react-router-dom'
import { auth } from '../../../App/AppConstRoutes.js'
import style from './style.scss'


function RegisterStateless(props) {

  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    // username: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })


  return (
    <Container >
      <br /><br />
      <Row>
        <Col col="md-2" order="md-1" mb="4"></Col>
        <Col md="8" order="md-2">
          <React.Fragment>
            <BH4 mb="3">Registration / <Link to={auth}>Log in</Link> </BH4>
            <br />
            <Row>

              <Col md="6" mb="3">
                <label htmlFor="firstName">First name</label>
                <input onChange={e => setRegData({ ...regData, firstName: e.target.value })}
                  value={regData.firstName}
                  className={style.inputType1}
                  type="text"
                  name="firstName"
                  id="firstName" />
              </Col>

              <Col md="6" mb="3">
                <label htmlFor="lastName">Last name</label>
                <input onChange={e => setRegData({ ...regData, lastName: e.target.value })}
                  value={regData.lastName}
                  className={style.inputType1}
                  type="text"
                  name="lastName"
                  id="lastName" />
              </Col>

            </Row>

            {/* <BDiv mb="3">
              <label htmlFor="username">Username</label>
              <InputGroup>
                <input onChange={e => setRegData({ ...regData, username: e.target.value })}
                  value={regData.username}
                  className={style.inputType1} type="text" name="username" id="username" />
              </InputGroup>
            </BDiv> */}

            <BDiv mb="3">
              <label htmlFor="email">Email</label>
              <input onChange={e => setRegData({ ...regData, email: e.target.value })}
                value={regData.email}
                className={style.inputType1}
                type="text"
                name="email"
                id="email"
                placeholder="you@example.com" />
            </BDiv>

            <BDiv mb="3">
              <label htmlFor="password">Password</label>
              <input onChange={e => setRegData({ ...regData, password: e.target.value })}
                value={regData.password}
                className={style.inputType1}
                type="password"
                name="password"
                id="password" />
            </BDiv>

            <BDiv mb="3">
              <label htmlFor="passwordRepeat">Password Repeat</label>
              <input onChange={e => setRegData({ ...regData, passwordRepeat: e.target.value })}
                value={regData.passwordRepeat}
                className={style.inputType1}
                type="password"
                name="passwordRepeat"
                id="passwordRepeat" />
            </BDiv>

          </React.Fragment>
          <BHr mb="4" />
          <Button onClick={() => { props.handleBtnRegistr(regData) }} primary lg block >Register</Button>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Container>

  );
}


export default React.memo(RegisterStateless)