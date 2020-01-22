import { SCROLL_EVENT } from './ScrollPageEvent.constants'

function scrollEventAction(x, y) {
  return {
    type: SCROLL_EVENT,
    payload: { x: x, y: y }
  }
}

function scrollEvent() {
  return dispatch => {
    dispatch(scrollEventAction(window.scrollY, window.scrollX))
  }
}

export { scrollEvent }
