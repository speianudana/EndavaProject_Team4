import React from 'react'
import commonStyle from '../style.scss'
import { Link } from 'react-router-dom'
import { regestr } from '../../../../components/App/AppConstRoutes'
import { Container } from '../../../../components/Layouts/Container'

export default function LoginStateless(props) {

  const [loginData, setLoginData] = React.useState({
    username: '',
    password: ''
  })

  return (
    <React.Fragment>
      <Container>
        <div className={commonStyle.card}>
          <div className={commonStyle.loginOrRegistrationBtn}>
            Log In /
            <Link to={regestr}> Registration</Link>
          </div >
          <p>Username:</p>
          <input className={commonStyle.inputType1} type="text"
            onChange={e => setLoginData({ ...loginData, username: e.target.value })}
            value={loginData.username} />
          <br />
          <br />
          <p>Password:</p>
          <input className={commonStyle.inputType1} type="password"
            onChange={e => setLoginData({ ...loginData, password: e.target.value })}
            value={loginData.password} />
          <br /><br />

          <button onClick={() => {
            props.onHandleBtnLogIn(loginData.username, loginData.password)
            setLoginData({ ...loginData, password: '', username: '' })
          }}>
            Log In
         </button>



        </div>

      </Container>
    </React.Fragment>
  )

  // return (
  //   <Container >
  //     <br /><br />
  //     <Row>
  //       <Col col="md-2" order="md-1" mb="4"></Col>
  //       <Col md="8" order="md-2">
  //         <React.Fragment>
  //           <BH4 mb="3"><Link to={regestr}>Registration</Link> / Log in </BH4>
  //           <br />
  //           <BDiv mb="3">
  //             <label htmlFor="email">Email</label>
  //             <input
  //               className={style.inputType1}
  //               onChange={e => setLoginData({ ...loginData, username: e.target.value })}
  //               value={loginData.username}
  //               type="text"
  //               name="email"
  //               id="email"
  //               placeholder="you@example.com" />
  //           </BDiv>

  //           <BDiv mb="3">
  //             <label htmlFor="password">Password</label>
  //             <input
  //               onChange={e => setLoginData({ ...loginData, password: e.target.value })}
  //               value={loginData.password}
  //               className={style.inputType1}
  //               type="password"
  //               name="password"
  //               id="password" />
  //           </BDiv>
  //         </React.Fragment>
  //         <BHr mb="4" />
  //         <Button primary lg block onClick={() => {
  //           props.onHandleBtnLogIn(loginData.username, loginData.password)
  //           setLoginData({ ...loginData, password: '', username: '' })
  //         }} >
  //           LogIn</Button>

  //       </Col>
  //     </Row>
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //   </Container>
  // )
}
