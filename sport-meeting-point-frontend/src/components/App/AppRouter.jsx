import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Header } from '../Layouts/Header'
import { Footer } from '../Layouts/Footer'

import { Index } from '../Pages/Home/Index'
import { Register } from '../Pages/Auth/Register'
import { Login } from '../Pages/Auth/LogIn'
import AccountActivator from '../Pages/Auth/AccountActivator'
import EventInfo from '../Pages/EventInfo'

import UserPage from '../Pages/UserPage'
import CreateEvent from '../Pages/CreateEvent'
import CreateNews from '../Pages/CreateNews'

import {
  index, registrationUrl,
  loginUrl, userPageUrl,
  userPageCreateEventUrl,
  userPageCreateNewsURL,
  userActivationUrl,
  eventInfoUrl
} from './AppConstRoutes.js'

import UserPersonalDataComponent from '../UserData/UserPersonalData/UserPersonalData.component.jsx'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const AppRouter = props => {
  const isAuth = props.isAuthenticated
  // console.log("qereqr: ", isAuth)

  return (
    <Router>
      <Header />

      <Route exact path='/' render={() => (<Redirect to={index} />)} />
      <Route exact path={index} component={Index} />
      <Route exact path={registrationUrl} component={Register} />
      <Route exact path={loginUrl} component={Login} />

      {/* This use get request, and data from url */}
      <Route path={userActivationUrl} component={AccountActivator} />
      <Route path={eventInfoUrl} component={EventInfo} />
      {/* This use get request, and data from url */}

      <Route exact path={userPageUrl} component={isAuth ? UserPage : Index} />
      <Route exact path={userPageCreateEventUrl} component={isAuth ? CreateEvent : Index} />
      <Route exact path={userPageCreateNewsURL} component={isAuth ? CreateNews : Index} />

      <Footer />
      <UserPersonalDataComponent />
    </Router>)
}

const mapStateToProps = state => ({
  isAuthenticated: state.userPersonalData.isAuthenticated
})

AppRouter.propTypes = {
  isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps)(AppRouter)
