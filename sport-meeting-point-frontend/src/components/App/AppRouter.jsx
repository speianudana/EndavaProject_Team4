import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Header } from '../Layouts/Header'
import { Footer } from '../Layouts/Footer'

import { Index } from '../Pages/Home/Index'
import { Register } from '../Pages/Auth/Register'
import { Login } from '../Pages/Auth/LogIn'
import AccountActivator from '../Pages/Auth/AccountActivator'

import UserPage from '../Pages/UserPage'
import CreateEvent from '../Pages/CreateEvent'
import CreateNews from '../Pages/CreateNews'

import {
    index, regestr, login, user_page, user_page_create_event, user_page_create_news,
    user_activation
} from './AppConstRoutes.js'
import UserPersonalDataComponent from '../UserData/UserPersonalData/UserPersonalData.component.jsx'

import { connect } from 'react-redux'



const AppRouter = props => {
    const isAuth = props.isAuthenticated
    // console.log("qereqr: ", isAuth)

    return (
        <Router>
            <Header />

            <Route exact path="/" render={() => (<Redirect to={index} />)} />
            <Route path={index} component={Index} />
            <Route path={regestr} component={Register} />
            <Route path={login} component={Login} />
            <Route path={user_activation} component={AccountActivator} />

            <Route exact path={user_page} component={isAuth ? UserPage : Index} />
            <Route exact path={user_page_create_event} component={isAuth ? CreateEvent : Index} />
            <Route exact path={user_page_create_news} component={isAuth ? CreateNews : Index} />



            <Footer />
            <UserPersonalDataComponent />
        </Router>)

}


const mapStateToProps = state => ({
    isAuthenticated: state.userPersonalData.isAuthenticated,
})



export default connect(mapStateToProps)(AppRouter)