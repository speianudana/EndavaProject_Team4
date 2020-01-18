import { url } from '../../utils/server-url'

export function subscribeUserToEvent (token, eventId) {
  const requestSetting = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer_${token}`
    }
  }

  return fetch(`${url}/api/for_authenticated_user/subscribe_to_event?event_id=${eventId}`, requestSetting)
}

export function unsubscribeUserToEvent (token, eventId) {
  const requestSetting = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer_${token}`
    }
  }

  return fetch(`${url}/api/for_authenticated_user/unsubscribe_to_event?event_id=${eventId}`, requestSetting)
}
