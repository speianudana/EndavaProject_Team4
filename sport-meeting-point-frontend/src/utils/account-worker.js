import axios from 'axios'
import { adress } from './server-adress'
import { tokenWorker } from './token-worker'


function tokenToPersonalData() {
  return new Promise((resolve, reject) => {
    const token = tokenWorker.loadTokenFromLocalStorage()
    if (token === null) reject('token not found in local storage!!!');


    fetch(adress + '/api/user_personal_data/get_data', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer_' + token
      },
    }).then((response) => {
      return response.json();
    }).then(data => {
      resolve(data)
    }).catch(err => reject(err))
  })



}



export { tokenToPersonalData }
