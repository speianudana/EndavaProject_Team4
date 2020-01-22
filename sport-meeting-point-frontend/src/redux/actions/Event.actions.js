import { url } from '../../utils/server-url'
import * as authUtils from '../utils/Authentication'
import {
  PUSH_EVENTS_WITHOUT_A_IMAGE_TO_ARRAY,
  REFRESH_SPORT_EVENT_ARRAY,
  SET_FETCH_COMPLETE,
  SET_IS_FETCHING

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
  return refreshSportEventArray()
}

function addParticipantsForEventIntoStore() {
  return refreshSportEventArray()
}

function refreshSportEventArray() {
  return {
    type: REFRESH_SPORT_EVENT_ARRAY
  }
}

function startFetch() {
  return {
    type: SET_IS_FETCHING
  }
}

function stopFetch() {
  return {
    type: SET_FETCH_COMPLETE
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
    dispatch(startFetch())

    fetch(`${url}/api/for_all/event/image_by_id?id=${sportEventObject.id}`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) return response.json()
        else throw Error()
      })
      .then((data) => {
        // console.log('object', data)
        dispatch(stopFetch())
        if (data === 'NOT_FOUND') {
          sportEventObject.image = noImage
        } else {
          sportEventObject.image = byteToImageSrc(data.image)
        }
        dispatch(addImageForEventIntoStore())
      })
      .catch((error) => {
        console.warn('Event action fetch image error:', error)
        sportEventObject.image = noImage
        dispatch(addImageForEventIntoStore())
        dispatch(stopFetch())
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
        sportEventObject.participants = data
        dispatch(addParticipantsForEventIntoStore())
      })
      .catch((error) => {
        console.warn('Event action fetch participants error:', error)
      })
  }
}

function loadFixedNumberOfEventsId(excludeIdArray = [], fixedNumber = 5) {
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
          dispatch(fetchParticipantsForSportEvent(a))
        })
      })
      .catch((error) => {
        console.warn('Event action error:', error)
      })
  }
}

function fetchSportEventById(sportEventId) {
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

export {
  refreshSportEventArray,
  fetchSportEventById,
  loadFixedNumberOfEventsId
}
