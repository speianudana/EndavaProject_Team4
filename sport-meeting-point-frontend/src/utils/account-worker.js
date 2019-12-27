import axios from 'axios'
import { url } from './server-url'
import { tokenWorker } from './token-worker'

function tokenToPersonalData() {
  const token = tokenWorker.loadTokenFromLocalStorage()

  const headers = {
    'Content-Type': undefined,
    Authorization: `Bearer_${token}`
  }

  return axios.post(url + '/api/user_personal_data/get_data', null, {
    headers: headers
  })
}

export { tokenToPersonalData }
