import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Header } from '../Layouts/Header'
import { Footer } from '../Layouts/Footer'

import { Index } from '../Pages/Home/Index'
import { Register } from '../Pages/Auth/Register'
import { Login } from '../Pages/Auth/LogIn'
import { index, regestr, login } from './AppConstRoutes.js'


export default class AppRouter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Header />

                <Route exact path="/" render={() => (<Redirect to={index} />)} />
                <Route path={index} component={Index} />
                <Route path={regestr} component={Register} />
                <Route path={login} component={Login} />

                <h1>
                    <br />
                    <br />
                    <br />
                </h1>

                <Footer />
            </Router>)

    }
}
