import { SET_DATA, SET_IS_AUTHENTICATED } from './UserPersonalData.constants.jsx'



const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  isAuthenticated: false
}


function userPersonalData(state = initialState, action) {

  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        email: action.payload.personalData.email,
        firstName: action.payload.personalData.firstName,
        lastName: action.payload.personalData.lastName,
      }
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    default:
      return state
  }

}



export { userPersonalData }