import { SET_DATA, SET_IS_AUTHENTICATED } from './UserPersonalData.constants.jsx'
import { tokenWorker } from '../../../utils/token-worker'

function setUserData (data) {
  return {
    type: SET_DATA,
    payload: data
  }
}

function setIsAuthenticatedValue (isAuth) {
  if (!isAuth && tokenWorker.haveToken()) tokenWorker.deleteTokenFromLocalStorage()

  return {
    type: SET_IS_AUTHENTICATED,
    payload: isAuth
  }
}

export { setUserData, setIsAuthenticatedValue }
