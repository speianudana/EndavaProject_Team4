import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from '../constants/Authentication.constants'
import { loadTokenFromLocalStorage } from '../utils/Authentication'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  role: '',
  isAuthenticated: false,
  isAuthProccess: false,
  statusErrorMessages: [],
  getToken: () => loadTokenFromLocalStorage()

}

function authenticationData (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthProccess: true,
        statusErrorMessages: []
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthProccess: false,
        isAuthenticated: true,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        dateOfBirth: action.payload.dob,
        role: action.payload.role,
        statusErrorMessages: []

      }
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthProccess: false,
        isAuthenticated: false,
        statusErrorMessages: action.payload.statusErrorMessages,
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
        statusErrorMessages: [],
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
