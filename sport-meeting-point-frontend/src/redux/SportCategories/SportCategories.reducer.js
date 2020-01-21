import {
  SET_SPORT_CATEGORIES_ARRAY,
  FETCH_PROCESS_COMPLETE,
  FETCH_PROCESS_RUNING
} from './SportCategories.constant'

const initialState = {
  allSportCategories: [],
  isFetching: false
}

function allSportCategoriesData (state = initialState, action) {
  switch (action.type) {
    case SET_SPORT_CATEGORIES_ARRAY:
      return {
        ...state,
        allSportCategories: [...state.allSportCategories, ...action.payload]
      }
    case FETCH_PROCESS_RUNING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_PROCESS_COMPLETE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export default allSportCategoriesData
