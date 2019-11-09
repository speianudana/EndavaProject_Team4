import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Header } from '../Layouts/Header'

import { Index } from '../Pages/Home/Index'
import { Register } from '../Pages/Auth/Register'
import { index, regestr } from './AppConstRoutes.js'


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

            </Router>)

    }
}
