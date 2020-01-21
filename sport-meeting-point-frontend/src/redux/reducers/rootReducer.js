import { combineReducers } from 'redux'
import authenticationData from './Authentication.reducer'
import allEventData from './Event.reducer'
import allNewsData from './News.reducer'
import allSportCategoriesData from '../SportCategories/SportCategories.reducer'

const rootReducer = combineReducers({
  authenticationData,
  allEventData,
  allNewsData,
  allSportCategoriesData
  // userPersonalData
})

export default rootReducer
