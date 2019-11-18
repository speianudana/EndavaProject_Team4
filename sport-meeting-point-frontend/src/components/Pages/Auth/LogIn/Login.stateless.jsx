import React from 'react'
import { Container, Row, Col, Button, BDiv, BH4, BHr, InputGroup } from 'bootstrap-4-react';
import style from './style.scss'
import { Link } from 'react-router-dom'
import { regestr } from '../../../../components/App/AppConstRoutes'

export default function LoginStateless(props) {

  const [loginData, setLoginData] = React.useState({
    username: '',
    password: ''
  })

  return (
    <Container >
      <br /><br />
      <Row>
        <Col col="md-2" order="md-1" mb="4"></Col>
        <Col md="8" order="md-2">
          <React.Fragment>
            <BH4 mb="3"><Link to={regestr}>Registration</Link> / Log in </BH4>
            <br />
            <BDiv mb="3">
              <label htmlFor="email">Email</label>
              <input
                className={style.inputType1}
                onChange={e => setLoginData({ ...loginData, username: e.target.value })}
                value={loginData.username}
                type="text"
                name="email"
                id="email"
                placeholder="you@example.com" />
            </BDiv>

            <BDiv mb="3">
              <label htmlFor="password">Password</label>
              <input
                onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                value={loginData.password}
                className={style.inputType1}
                type="password"
                name="password"
                id="password" />
            </BDiv>
          </React.Fragment>
          <BHr mb="4" />
          <Button primary lg block onClick={() => {
            props.handleBtnLogIn(loginData.username, loginData.password)
            setLoginData({ ...loginData, password: '', username: '' })
          }} >
            LogIn</Button>

        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}
