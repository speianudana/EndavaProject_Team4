import React, { useEffect } from 'react'
import AppRouter from './AppRouter.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authorizeUserIfTokenInLocalStorageIsValid } from '../../redux/actions/Authentication.actions'

function App(props) {
  useEffect(() => {
    props.tryAuthorizeUserUsingTokenFromLocalStorage()
  }, [])

  return <AppRouter isAuthenticated={props.isAuthenticated} userRole={props.userRole} />
}

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationData.isAuthenticated,
  userRole: state.authenticationData.role
})

const mapDispatchToProps = dispatch => ({
  tryAuthorizeUserUsingTokenFromLocalStorage: bindActionCreators(authorizeUserIfTokenInLocalStorageIsValid,
    dispatch)
})

App.propTypes = {
  tryAuthorizeUserUsingTokenFromLocalStorage: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  userRole: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
