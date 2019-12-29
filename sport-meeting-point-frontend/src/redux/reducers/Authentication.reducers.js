import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from '../constants/Authentication.constants'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  role: '',
  isAuthenticated: false,
  isAuthProccess: false,
  statusErrorMessage: ''
}

function authenticationData (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthProccess: true,
        statusErrorMessage: ''
      }
    case LOGIN_USER_SUCCESS:
      // console.log('z', action)
      return {
        ...state,
        isAuthProccess: false,
        isAuthenticated: true,
        email: action.payload.personalData.email,
        firstName: action.payload.personalData.firstName,
        lastName: action.payload.personalData.lastName,
        dateOfBirth: action.payload.personalData.dob,
        role: action.payload.personalData.role,
        statusErrorMessage: ''

      }
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthProccess: false,
        isAuthenticated: false,
        statusErrorMessage: action.payload.statusErrorMessage,
        email: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        role: ''

      }
    case LOGOUT_USER:
      return {
        ...state,
        isAuthProccess: false,
        isAuthenticated: false,
        statusErrorMessage: '',
        email: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        role: ''

      }
    default:
      return state
  }
}

export default authenticationData
