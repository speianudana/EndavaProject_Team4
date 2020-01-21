import {
  SET_SPORT_CATEGORIES_ARRAY,
  FETCH_PROCESS_COMPLETE,
  FETCH_PROCESS_RUNING
} from './SportCategories.constant'
import { fetchSportCategories } from 'restApi/SportCategories/index.js'

function setFetchProcessRunning () {
  return {
    type: FETCH_PROCESS_RUNING
  }
}

function setFetchProcessComplete () {
  return {
    type: FETCH_PROCESS_COMPLETE
  }
}

function setSportCategoriesArray (categories) {
  return {
    type: SET_SPORT_CATEGORIES_ARRAY,
    payload: categories
  }
}

function fecthSportCategories (token) {
  return dispatch => {
    dispatch(setFetchProcessRunning())
    fetchSportCategories(token)
      .then(res => {
        if (res.status === 200 && res.ok) return res.json()
        throw Error(res)
      })
      .then(data => {
        dispatch(setSportCategoriesArray(data))
        dispatch(setFetchProcessComplete())
      })
      .catch(err => {
        console.warn(err)
        dispatch(setFetchProcessComplete())
      })
  }
}

export { fecthSportCategories }
