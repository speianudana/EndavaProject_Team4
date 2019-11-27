import { SET_DATA } from './UserPersonalData.constants.jsx'



function setUserData(email) {
  return {
    type: SET_DATA,
    payload: email
  }
}


export { setUserData }