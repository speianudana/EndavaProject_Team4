import { combineReducers } from 'redux'
import authenticationData from './Authentication.reducer'
import allEventData from './Event.reducer'
import allNewsData from './News.reducer'

const rootReducer = combineReducers({
  authenticationData,
  allEventData,
  allNewsData
  // userPersonalData
})

export default rootReducer
