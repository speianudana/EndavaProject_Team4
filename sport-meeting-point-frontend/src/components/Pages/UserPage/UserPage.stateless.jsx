import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../Layouts/Container'
import style from './style.scss'
import unauthUserImg from '../../../../static/unauth_usr.png'
import { Redirect } from 'react-router-dom'
import { userPageCreateEventUrl, userPageCreateNewsURL } from '../../App/AppConstRoutes'
// import CreateEvent from './CreateEvent'

const PersonalDataLine = ({ title, text }) => (
  <p className={style.txt}>
    <span className={style.txt} style={{ fontWeight: 'bold' }}>
      {title}
    </span>
    {text}
  </p>
)

const Button = ({ title, onClickHandle }) => (
  <button
    className={`${style.btn} ${style.simpleBtn}`}
    onClick={e => onClickHandle()}
  >
    {title}
  </button>
)

const UserPageStateless = ({ signOut, firstName, lastName, email, role }) => {
  const [redirectToCreateEvent, setRedirectToCreateEvent] = React.useState(false)
  const [redirectToCreateNews, setRedirectToCreateNews] = React.useState(false)

  if (redirectToCreateEvent) return <Redirect to={userPageCreateEventUrl} />
  if (redirectToCreateNews) return <Redirect to={userPageCreateNewsURL} />

  return (
    <Container>
      <main className={style.main}>

        <div className={style.item}>
          <div className={style.miniItem}>
            <img id={style.userImg} src={unauthUserImg} alt='' />
          </div>
          <div className={style.miniItem}>
            <button className={`${style.btn} ${style.simpleBtn}`}>Load user image</button>
            <button className={`${style.btn} ${style.simpleBtn}`}>Reset personal data</button>
            <button onClick={() => signOut()} id={style.exitBtn} className={style.btn}>Exit</button>
          </div>
        </div>

        <div className={style.item}>
          <div style={{ alignItems: 'flex-start' }} className={style.miniItem}>
            <PersonalDataLine title='Email: ' text={email} />
            <PersonalDataLine title='First Name: ' text={firstName} />
            <PersonalDataLine title='Last Name: ' text={lastName} />
            <PersonalDataLine title='Authority: ' text={role.toLowerCase()} />

          </div>
          {/* <div className={style.miniItem}> */}
          {/*  <button className={`${style.btn} ${style.simpleBtn}`} */}
          {/*    onClick={e => setRedirectToCreateEvent(true)} > */}
          {/*    Create event */}
          {/*  </button> */}
          {/* </div> */}
          <div className={style.miniItem}>

            <Button title='Create Event' onClickHandle={e => setRedirectToCreateEvent(true)} />
            <Button title='Create News' onClickHandle={e => setRedirectToCreateNews(true)} />
          </div>

        </div>

      </main>
      {/* <CreateEvent /> */}

    </Container>
  )
}

UserPageStateless.propTypes = {
  signOut: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string
}

Button.propTypes = {
  onClickHandle: PropTypes.func,
  title: PropTypes.string
}

PersonalDataLine.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default UserPageStateless
