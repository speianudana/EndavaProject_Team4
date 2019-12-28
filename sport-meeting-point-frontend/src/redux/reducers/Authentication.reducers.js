import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from '../constants/Authentication.constants'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  isAuthenticated: false,
  isAuthProccess: false,
  statusMessages: [],
  statusError: false
}

function authenticationData (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      console.log('1', action.payload)
      return {
        ...state,
        isAuthProccess: true
      }
    case LOGIN_USER_SUCCESS:
      console.log('2', action.payload)
      return {
        ...state,
        isAuthProccess: false
      }
    default:
      return state
  }
}

export default authenticationData
