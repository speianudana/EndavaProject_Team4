import { url } from '../../utils/server-url'

export default function activateUser (data) {
  const config = {
    method: 'GET',
    headers: {
    }
  }

  return fetch(`${url}/api/for_all/auth/validate?data=${data}`, config)
}
