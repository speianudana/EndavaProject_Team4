import {
  PUSH_NEWS_WITHOUT_A_IMAGE_TO_ARRAY,
  REFRESH_SPORT_NEWS_ARRAY

} from '../constants/News.constants'

const initialState = {
  allNews: []
}

function allNewsData (state = initialState, action) {
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

    default:
      return state
  }
}

export default allNewsData
