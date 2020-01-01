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

import PropTypes from 'prop-types'

const Wrapper = ({ children }) => (
  <div style={{ minHeight: '100vh' }}>
    {children}
  </div>
)

const AppRouter = ({ isAuthenticated, userRole }) => {

  return (
    <Router>
      <Header />

      <Wrapper>
        <Route exact path='/' render={() => (<Redirect to={index} />)} />
        <Route exact path={index} component={Index} />
        <Route exact path={registrationUrl} component={Register} />
        <Route exact path={loginUrl} component={Login} />

        {/* This use get request, and data from url */}
        <Route path={userActivationUrl} component={AccountActivator} />
        <Route path={eventInfoUrl} component={EventInfo} />
        {/* This use get request, and data from url */}

        <Route exact path={userPageUrl} component={isAuthenticated ? UserPage : Index} />
        <Route exact path={userPageCreateEventUrl} component={isAuthenticated ? CreateEvent : Index} />
        <Route exact path={userPageCreateNewsURL} component={isAuthenticated ? CreateNews : Index} />
      </Wrapper>

      <Footer />
      {/* <UserPersonalDataComponent /> */}
    </Router>)
}

AppRouter.propTypes = {
  isAuthenticated: PropTypes.bool
}

export default AppRouter


// 