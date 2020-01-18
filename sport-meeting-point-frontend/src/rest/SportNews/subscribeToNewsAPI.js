import { url } from '../../utils/server-url'

function subscribeToNews (newsId, token) {
  const requestSettings = {
    method: 'GET',
    headers: {
      'Content-Type': undefined,
      Authorization: `Bearer_${token}`
    }
  }

  return fetch(`${url}/api/for_authenticated_user/subscribe_to_news?newsId=${newsId}`,
    requestSettings)
}

function unsubscribeToNews (newsId, token) {
  const requestSettings = {
    method: 'GET',
    headers: {
      'Content-Type': undefined,
      Authorization: `Bearer_${token}`
    }
  }

  return fetch(`${url}/api/for_authenticated_user/unsubscribe_to_news?newsId=${newsId}`,
    requestSettings)
}

function getSubscribesForEventByEventId (newsId, token) {
  const requestSettings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer_${token}`
    }
  }

  return fetch(`${url}/api/for_all/news/get_news_participants?id=${newsId}`,
    requestSettings)
}

export { subscribeToNews, unsubscribeToNews, getSubscribesForEventByEventId }
