import { SET_DATA } from './UserPersonalData.constants.jsx'



const initialState = {
  email: 'email',
  firstName: 'fn',
  lastName: 'ln',

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
    default:
      return state
  }

}



export { userPersonalData }