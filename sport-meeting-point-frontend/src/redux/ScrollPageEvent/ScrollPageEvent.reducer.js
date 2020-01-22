import {
  SCROLL_EVENT
} from './ScrollPageEvent.constants'

const initialState = {
  yPos: 0,
  xPos: 0
}

function scrollPageEvent(state = initialState, action) {
  switch (action.type) {
    case SCROLL_EVENT:
      return {
        ...state,
        yPos: window.scrollY,
        xPos: window.scrollX
      }

    default:
      return state
  }
}

export default scrollPageEvent
