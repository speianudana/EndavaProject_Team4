// import axios from 'axios'
import { adress } from './server-adress'
import { tokenWorker } from './token-worker'

function tokenToPersonalData() {
  const token = tokenWorker.loadTokenFromLocalStorage()
  if (token === null) console.log('token not found in local storage!!!');

  console.log(token)

  fetch(adress + '/api/user_personal_data/get_data', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': 'Bearer_' + token
    },
  }).then((response) => {
    return response.json();
  }).then(data => {
    console.log(data)
  }).catch(err => console.log(err))


}


export { tokenToPersonalData }
