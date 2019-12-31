import { url } from '../../utils/server-url'
// import axios from 'axios'
import * as authUtils from '../utils/Authentication'
import SportEvent from '../../classes/SportEvent'
import {
  ADD_EVENT_IN_ARRAY,
  LOAD_A_FIXED_NUMBER_OF_EVENTS
  // LOAD_EVENT_INFO_BY_ID,
  // LOAD_GET_EVENT_IMAGE_BY_ID,
  // LOAD_GET_EVENT_PARTICIPANTS_BY_ID

} from '../constants/Event.constants'

export function addEventInStore (data) {
  return {
    type: ADD_EVENT_IN_ARRAY,
    payload: data
  }
}

export function loadFixedNumberOfEventsId (fixedNumber) {
  return dispatch => {

  }
}
