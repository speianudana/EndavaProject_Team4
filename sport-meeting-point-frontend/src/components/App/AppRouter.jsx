import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Header } from '../Layouts/Header'
import { Footer } from '../Layouts/Footer'

import { Index } from '../Pages/Home/Index'
import About from '../Pages/Home/About'
import { Register } from '../Pages/Auth/Register'
import { Login } from '../Pages/Auth/LogIn'
import AccountActivator from '../Pages/Auth/AccountActivator'
import EventInfo from '../Pages/EventInfo'
import NewsInfo from '../Pages/NewsInfo'

import UserPage from '../Pages/UserPage'
import CreateEvent from '../Pages/CreateEvent'
import CreateNews from '../Pages/CreateNews'

import {
  index,
  about,
  registrationUrl,
  loginUrl, userPageUrl,
  userPageCreateEventUrl,
  userPageCreateNewsURL,
  userActivationUrl,
  eventInfoUrl,
  newsInfoUrl
} from './AppConstRoutes.js'

import PropTypes from 'prop-types'

const Wrapper = ({ children }) => (
  <div style={{ minHeight: '100vh' }}>
    {children}
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node
}

const AppRouter = ({ isAuthenticated, userRole }) => {
  return (
    <Router>
      <Header />

      <Wrapper>
        <Route exact path='/' render={() => (<Redirect to={index} />)} />
        <Route exact path={index} component={Index} />
        <Route exact path={about} component={About} />
        <Route exact path={registrationUrl} component={Register} />
        <Route exact path={loginUrl} component={Login} />

        {/* This use get request, and data from url */}
        <Route path={userActivationUrl} component={AccountActivator} />
        <Route path={eventInfoUrl} component={EventInfo} />
        <Route path={newsInfoUrl} component={NewsInfo} />

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
  isAuthenticated: PropTypes.bool,
  userRole: PropTypes.string
}

export default AppRouter

//
