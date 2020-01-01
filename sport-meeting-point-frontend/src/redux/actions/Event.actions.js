import { url } from '../../utils/server-url'
import * as authUtils from '../utils/Authentication'
import {
  PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY,
  REFRESH_SPORT_EVENT_ARRAY

} from '../constants/Event.constants'
import byteToImageSrc from '../../utils/byteToImageSrc'
import noImage from '../../../static/No-Image-Basic.png'

function addEventsInStore(data) {
  return {
    type: PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY,
    payload: data
  }
}

function addImageForEventIntoStore() {
  return {
    type: REFRESH_SPORT_EVENT_ARRAY
  }
}

function addParticipantsForEventIntoStore() {
  return {
    type: REFRESH_SPORT_EVENT_ARRAY
  }
}

function fetchSportEventImage(sportEventObject) {
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
        dispatch(addImageForEventIntoStore())
      })
      .catch((error) => {
        console.warn('Event action fetch image error:', error)
      })
  }
}

function fetchParticipantsForSportEvent(sportEventObject) {
  return dispatch => {
    const token = authUtils.loadTokenFromLocalStorage()
    const requestSetting = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      }
    }

    fetch(`${url}/api/for_all/event/get_event_participants?id=${sportEventObject.id}`,
      requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        // console.log('test11', data)
        sportEventObject.participants = data
        dispatch(addParticipantsForEventIntoStore())
      })
      .catch((error) => {
        console.warn('Event action fetch participants error:', error)
      })


  }
}

export function loadFixedNumberOfEventsId(excludeIdArray = [], fixedNumber = 5) {
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

export function fetchSportEventById(sportEventId) {
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
        dispatch(fetchSportEventImage(data))
        dispatch(fetchParticipantsForSportEvent(data))
        // console.log(data)
      })
      .catch((error) => {
        console.warn('Event action fetch event by id error:', error)
      })
  }
}
