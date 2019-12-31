import { url } from '../../utils/server-url'
import * as authUtils from '../utils/Authentication'
import {
  PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY,
  PUSH_EVENTS_WITH_A_IMAGE_TO_ARRAY

} from '../constants/Event.constants'
import byteToImageSrc from '../../utils/byteToImageSrc'
import noImage from '../../../static/No-Image-Basic.png'

function addEventsInStore (data) {
  return {
    type: PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY,
    payload: data
  }
}

function addImageForEventIntoStore (id, image) {
  return {
    type: PUSH_EVENTS_WITH_A_IMAGE_TO_ARRAY,
    payload: { id, image }
  }
}

function fetchSportEventImage (sportEventObject) {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()
    const requestSetting = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      }
    }
    fetch(`${url}/api/for_all/event/image_by_id?id=${sportEventObject.id}`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        // console.log('object', data)
        if (data === 'NOT_FOUND') {
          sportEventObject.image = noImage
        } else {
          sportEventObject.image = byteToImageSrc(data.image)
        }
        dispatch(addImageForEventIntoStore(sportEventObject))
      })
      .catch((error) => {
        console.warn('Event action fetch image error:', error)
      })
  }
}

export function loadFixedNumberOfEventsId (excludeIdArray = [], fixedNumber = 5) {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()

    const requestData = JSON.stringify({
      getUIEventsId: excludeIdArray,
      theNumberOfNecessaryEvents: fixedNumber
    })

    const requestSetting = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      },
      body: requestData
    }

    fetch(`${url}/api/for_all/event/get_events`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        dispatch(addEventsInStore(data))
        data.forEach(a => {
          dispatch(fetchSportEventImage(a))
        })
      })
      .catch((error) => {
        console.warn('Event action error:', error)
      })
  }
}

export function fetchSportEventById (sportEventId) {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()
    const requestSetting = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      }
    }
    fetch(`${url}/api/for_all/event/event_by_id?id=${sportEventId}`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        dispatch(addEventsInStore([data]))
        // console.log(data)
      })
      .catch((error) => {
        console.warn('Event action fetch event by id error:', error)
      })
  }
}
