// import axios from 'axios'
import { adress } from './server-adress'
import { tokenWorker } from './token-worker'

function tokenToPersonalData() {
  // return new Promise((resolve, reject) => {
  const token = tokenWorker.loadTokenFromLocalStorage()
  if (token === null) reject('token not found in local storage!!!');

  console.log(token)

  fetch(adress + '/api/user_personal_data/get_data', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Authorization': 'Bearer_' + token
    },
    // body: token

  }).then(data => {
    console.log(data)
  });




}


export { tokenToPersonalData }
