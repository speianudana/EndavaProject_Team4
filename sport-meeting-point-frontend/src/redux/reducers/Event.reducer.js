import {
  PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY,
  PUSH_EVENTS_WITH_A_IMAGE_TO_ARRAY

} from '../constants/Event.constants'

const initialState = {
  allEvents: [],
  allEventsId: () => (initialState.allEvents.map(a => Number(a.id)))

}

function allEventData (state = initialState, action) {
  switch (action.type) {
    case PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY:
      return {
        ...state,
        allEvents: [...state.allEvents, ...action.payload]
      }
    case PUSH_EVENTS_WITH_A_IMAGE_TO_ARRAY:
      return {
        ...state,
        allEvents: [...state.allEvents]
      }

    default:
      return state
  }
}

export default allEventData
