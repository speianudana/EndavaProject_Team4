import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../Layouts/Container'
import style from './style.scss'
import unauthUserImg from '../../../../static/unauth_usr.png'
import { Redirect } from 'react-router-dom'
import { userPageCreateEventUrl, userPageCreateNewsURL } from '../../App/AppConstRoutes'
import MyEventsMyNews from './MyEventsMyNews'

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

const UserPageStateless = ({ signOut, firstName, lastName, email, role, dateOfBirth }) => {
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
            <Button title='Create Event' onClickHandle={e => setRedirectToCreateEvent(true)} />
            <Button title='Create News' onClickHandle={e => setRedirectToCreateNews(true)} />
            <Button title='Load user image' onClickHandle={e => alert(true)} />
            <Button title='Reset personal data' onClickHandle={e => alert(true)} />
            <Button title='Exit' onClickHandle={() => signOut()} />

          </div>
        </div>

        <div className={style.item}>
          <div style={{ alignItems: 'flex-start' }} className={style.miniItem}>
            <PersonalDataLine title='Email: ' text={email} />
            <PersonalDataLine title='First Name: ' text={firstName} />
            <PersonalDataLine title='Last Name: ' text={lastName} />
            <PersonalDataLine title='Authority: ' text={role.toLowerCase()} />
            <PersonalDataLine title='Date of birth: ' text={dateOfBirth} />

          </div>

        </div>

        <MyEventsMyNews />

      </main>

    </Container>
  )
}

UserPageStateless.propTypes = {
  signOut: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  dateOfBirth: PropTypes.string
}

UserPageStateless.defaultProps = {
  dateOfBirth: '-'
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
