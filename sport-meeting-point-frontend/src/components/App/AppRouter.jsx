import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
// import { BaseLayout } from '../layouts/BaseLayout'
import { Header } from '../Layouts/Header'

import { Index } from '../Pages/Home/Index'
// import { About } from '../Pages/Home/About'




export default class AppRouter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Header />
                <Route exact path="/" render={() => (<Redirect to="/home/index" />)} />
                <Route path="/home/index" component={Index} />

            </Router>)

    }
}
