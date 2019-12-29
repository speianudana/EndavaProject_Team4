import React, { useEffect } from 'react'
import AppRouter from './AppRouter.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authorizeUserIfTokenInLocalStorageIsValid } from '../../redux/actions/Authentication.actions'

function App (props) {
  useEffect(() => {
    props.tryAuthorizeUserUsingTokenFromLocalStorage()
  }, [])

  return <AppRouter isAuthenticated={props.isAuthenticated} />
}

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationData.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  tryAuthorizeUserUsingTokenFromLocalStorage: bindActionCreators(authorizeUserIfTokenInLocalStorageIsValid,
    dispatch)
})

App.propTypes = {
  tryAuthorizeUserUsingTokenFromLocalStorage: PropTypes.func,
  isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
