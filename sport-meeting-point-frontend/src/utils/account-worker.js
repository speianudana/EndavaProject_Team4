import axios from 'axios'
import { url } from './server-url'
import { tokenWorker } from './token-worker'


function tokenToPersonalData() {
  // return new Promise((resolve, reject) => {
  //   const token = tokenWorker.loadTokenFromLocalStorage()
  //   if (token === null) reject('token not found in local storage!!!');


  //   fetch(url + '/api/user_personal_data/get_data', {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': 'Bearer_' + token
  //     },
  //   })
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       resolve(data)
  //     })
  //     .catch(e => console.warn(e))
  //     .catch(e => console.warn(e))


  // })

  const token = tokenWorker.loadTokenFromLocalStorage()

  const headers = {
    'Content-Type': undefined,
    'Authorization': `Bearer_${token}`
  }

  return axios.post(url + '/api/user_personal_data/get_data', null, {
    headers: headers
  })



}



export { tokenToPersonalData }
