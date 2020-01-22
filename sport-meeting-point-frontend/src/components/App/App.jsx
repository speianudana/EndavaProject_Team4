import React, { useEffect } from 'react'
import AppRouter from './AppRouter.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authorizeUserIfTokenInLocalStorageIsValid } from '../../redux/actions/Authentication.actions'
import ScrollPageEventWrapper from 'data/ScrollPageEvent/ScrollPageEventWrapper.jsx'

function App(props) {
  useEffect(() => {
    props.tryAuthorizeUserUsingTokenFromLocalStorage()
  }, [])

  return (
    <ScrollPageEventWrapper>
      <AppRouter isAuthenticated={props.isAuthenticated} userRole={props.userRole} />
    </ScrollPageEventWrapper>)
}

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationData.isAuthenticated,
  userRole: state.authenticationData.role
})

const mapDispatchToProps = dispatch => ({
  tryAuthorizeUserUsingTokenFromLocalStorage: bindActionCreators(
    authorizeUserIfTokenInLocalStorageIsValid,
    dispatch)
})

App.propTypes = {
  tryAuthorizeUserUsingTokenFromLocalStorage: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  userRole: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
