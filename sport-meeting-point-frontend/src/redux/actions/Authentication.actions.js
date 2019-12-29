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

export function loginUserFailure (errorMessages) {
  authUtils.deleteTokenFromLocalStorage()
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      statusErrorMessages: errorMessages
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
          dispatch(loginUserFailure([]))
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

    fetch(`${url}/api/for_all/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email === '' ? null : email,
        password: password === '' ? null : password
      })
    })
      .then((response) => {
        console.log(response)
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        if (data.token) {
          authUtils.saveTokenInLocalStorage(data.token)
          dispatch(tokenToPersonalData())
          console.log('token:', data.token)
        } else if (data.validationErrorMessages) {
          console.warn(data.validationErrorMessages)
          dispatch(loginUserFailure(data.validationErrorMessages))
        }
      })
      .catch((error) => {
        console.error('Authentication Error:', error)
      })

    // axios.post(`${url}/api/for_all/login`, {
    //   username: email,
    //   password: password
    // })
    //   .then(res => {
    //     if (res.data.errorMessage) {
    //       dispatch(loginUserFailure(res.data.errorMessage))
    //     }
    //     if (res.data.token) {
    //       authUtils.saveTokenInLocalStorage(res.data.token)
    //       dispatch(tokenToPersonalData())
    //     }
    //   })
    //   .catch(function () {
    //     dispatch(loginUserFailure('Authentication error!!!'))
    //   })
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
