import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../constants/Authentication.constants'
import { url } from '../../utils/server-url'
import axios from 'axios'
import * as authUtils from '../utils/Authentication'

export function loginUserRequest () {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function loginUserSuccess (personalData) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: personalData
  }
}

export function loginUserFailure (errorMessage) {
  authUtils.deleteTokenFromLocalStorage()
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      statusErrorMessage: errorMessage
    }
  }
}

export function logout () {
  authUtils.deleteTokenFromLocalStorage()
  return {
    type: LOGOUT_USER
  }
}

export function tokenToPersonalData () {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()

    const headers = {
      'Content-Type': undefined,
      Authorization: `Bearer_${token}`
    }

    if (token) {
      axios.post(url + '/api/user_personal_data/get_data', null, {
        headers: headers
      })
        .then(res => {
          // console.log(res.data)
          dispatch(loginUserSuccess(res.data))
        })
        .catch(function () {
          dispatch(loginUserFailure(''))
        })
    }
  }
}

/*
TO DO:
  This method receives a token from the server,
  if with success it sends the token back in exchange for personal data
*/
export function loginUser (email, password) {
  return dispatch => {
    dispatch(loginUserRequest())
    axios.post(`${url}/api/auth/login`, {
      username: email,
      password: password
    })
      .then(res => {
        if (res.data.errorMessage) {
          dispatch(loginUserFailure(res.data.errorMessage))
        }
        if (res.data.token) {
          authUtils.saveTokenInLocalStorage(res.data.token)
          dispatch(tokenToPersonalData())
        }
      }).catch(function () {
        dispatch(loginUserFailure('Authentication error!!!'))
      })
  }
}

/*
TO DO:
  Method, checks the storage for a token and authorize the user when he visits the site

*/
export function authorizeUserIfTokenInLocalStorageIsValid () {
  return dispatch => {
    if (authUtils.loadTokenFromLocalStorage()) {
      dispatch(tokenToPersonalData())
    }
  }
}
