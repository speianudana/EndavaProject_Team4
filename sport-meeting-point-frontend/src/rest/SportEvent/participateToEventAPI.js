import { url } from '../../utils/server-url'

export function subscribeUserToEvent(token, eventId) {
  return new Promise((resolve, reject) => {

    const requestSetting = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      }
    }

    fetch(`${url}/api/for_authenticated_user/subscribe_to_event?event_id=${eventId}`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) resolve('Success')
        else reject({
          status: response.status
        })
      })
      .then((data) => {
      })
      .catch((error) => {
      })


  })







}

export function unsubscribeUserToEvent(token, eventId) {
  return new Promise((resolve, reject) => {

    const requestSetting = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${token}`
      }
    }

    fetch(`${url}/api/for_authenticated_user/unsubscribe_to_event?event_id=${eventId}`, requestSetting)
      .then(response => {
        if (response.status === 200 && response.ok) resolve('Success')
        else reject({
          status: response.status
        })
      })
      .then((data) => {
      })
      .catch((error) => {
      })


  })
}