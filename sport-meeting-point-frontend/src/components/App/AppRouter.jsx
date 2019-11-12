import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Header } from '../Layouts/Header'

import { Index } from '../Pages/Home/Index'
import { Register } from '../Pages/Auth/Register'
import { Auth } from '../Pages/Auth/Auth'
import { index, regestr, auth } from './AppConstRoutes.js'


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
                <Route path={auth} component={Auth} />
            </Router>)

    }
}
