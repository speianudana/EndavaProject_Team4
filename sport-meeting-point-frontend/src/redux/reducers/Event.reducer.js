import {
  PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY,
  REFRESH_SPORT_EVENT_ARRAY


} from '../constants/Event.constants'

const initialState = {
  allEvents: [],
  allEventsId: () => (initialState.allEvents.map(a => Number(a.id)))

};

function allEventData(state = initialState, action) {
  switch (action.type) {
    case PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY:
      return {
        ...state,
        allEvents: [...state.allEvents, ...action.payload]
      };
    case REFRESH_SPORT_EVENT_ARRAY:
      return {
        ...state,
        allEvents: [...state.allEvents]
      }

    default:
      return state
  }
}

export default allEventData
