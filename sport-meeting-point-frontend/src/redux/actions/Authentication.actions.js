import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from '../constants/Authentication.constants'
import { url } from '../../utils/server-url'
import axios from 'axios'

export function loginUserRequest () {
  console.log(1)
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function loginUser (email, password, redirect = '/') {
  // console.log(441)
  return dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    }).then(() => {
      dispatch({ type: LOGIN_USER_REQUEST })
    }).catch(() => {

    })
  }
}
