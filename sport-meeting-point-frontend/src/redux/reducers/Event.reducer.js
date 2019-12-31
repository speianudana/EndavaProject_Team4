import {
  ADD_EVENT_IN_ARRAY
  // LOAD_A_FIXED_NUMBER_OF_EVENTS_ID,
  // LOAD_EVENT_INFO_BY_ID,
  // LOAD_GET_EVENT_IMAGE_BY_ID,
  // LOAD_GET_EVENT_PARTICIPANTS_BY_ID

} from '../constants/Event.constants'
import SportEvent from '../../classes/SportEvent'

const initialState = {
  allEvents: [],
  allEventsId: () => (initialState.allEvents.map(a => Number(a.id)))

}

function allEventData (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT_IN_ARRAY:
      state.allEvents.push(new SportEvent())
      return {
        ...state,
        allEvents: state.allEvents
      }
    default:
      return state
  }
}

export default allEventData
