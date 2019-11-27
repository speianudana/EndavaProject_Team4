import { SET_DATA, SET_IS_AUTHENTICATED } from './UserPersonalData.constants.jsx'



function setUserData(data) {
  return {
    type: SET_DATA,
    payload: data
  }
}

function setIsAuthenticatedValue(isAuth) {
  return {
    type: SET_IS_AUTHENTICATED,
    payload: isAuth
  }
}


export { setUserData, setIsAuthenticatedValue }