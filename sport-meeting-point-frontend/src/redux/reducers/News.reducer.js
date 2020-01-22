import {
  PUSH_NEWS_WITHOUT_A_IMAGE_TO_ARRAY,
  REFRESH_SPORT_NEWS_ARRAY,
  SET_NEWS_FETCH_COMPLETE,
  SET_NEWS_IS_FETCH

} from '../constants/News.constants'

const initialState = {
  allNews: [],
  fetchNews: false
}

function allNewsData(state = initialState, action) {
  switch (action.type) {
    case PUSH_NEWS_WITHOUT_A_IMAGE_TO_ARRAY:
      return {
        ...state,
        allNews: [...state.allNews, ...action.payload]
      }
    case REFRESH_SPORT_NEWS_ARRAY:
      return {
        ...state,
        allNews: [...state.allNews]
      }
    case SET_NEWS_FETCH_COMPLETE:
      return {
        ...state,
        fetchNews: false
      }
    case SET_NEWS_IS_FETCH:
      return {
        ...state,
        fetchNews: true
      }

    default:
      return state
  }
}

export default allNewsData
