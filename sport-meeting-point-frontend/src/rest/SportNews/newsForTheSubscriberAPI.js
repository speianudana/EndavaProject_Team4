import { url } from 'utils/server-url'

export default function newsForTheSubscriber (token) {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer_${token}`
    }
  }

  return fetch(`${url}/api/for_authenticated_user/get_news_for_subscriber`, config)
}
