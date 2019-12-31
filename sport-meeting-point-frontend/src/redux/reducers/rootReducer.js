import { combineReducers } from 'redux'
import authenticationData from './Authentication.reducer'
import allEventData from './Event.reducer'

const rootReducer = combineReducers({
  authenticationData,
  allEventData
  // userPersonalData
})

export default rootReducer
