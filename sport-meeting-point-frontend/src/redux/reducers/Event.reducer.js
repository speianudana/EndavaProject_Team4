import {
  PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY,
  REFRESH_SPORT_EVENT_ARRAY,
  SET_FETCH_COMPLETE,
  SET_IS_FETCHING

} from '../constants/Event.constants'

const initialState = {
  allEvents: [],
  allEventsId: () => (initialState.allEvents.map(a => Number(a.id))),
  isFetch: false

}

function allEventData(state = initialState, action) {
  switch (action.type) {
    case PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY:
      return {
        ...state,
        allEvents: [...state.allEvents, ...action.payload]
      }
    case REFRESH_SPORT_EVENT_ARRAY:
      return {
        ...state,
        allEvents: [...state.allEvents]
      }
    case SET_FETCH_COMPLETE:
      return {
        ...state,
        isFetch: false
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetch: true
      }

    default:
      return state
  }
}

export default allEventData
