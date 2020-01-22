import { combineReducers } from 'redux'
import authenticationData from './Authentication.reducer'
import allEventData from './Event.reducer'
import allNewsData from './News.reducer'
import allSportCategoriesData from '../SportCategories/SportCategories.reducer'
import scrollPageEvent from '../ScrollPageEvent/ScrollPageEvent.reducer'

const rootReducer = combineReducers({
  authenticationData,
  allEventData,
  allNewsData,
  allSportCategoriesData,
  scrollPageEvent
  // userPersonalData
})

export default rootReducer
