// import axios from 'axios'
import { adress } from './server-adress'
import { tokenWorker } from './token-worker'

function tokenToPersonalData() {
  const token = tokenWorker.loadTokenFromLocalStorage()
  if (token === null) console.log('token not found in local storage!!!');

  console.log(token)

  fetch(adress + '/api/user_personal_data/get_data', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': 'Bearer_' + token
    },
    // body: token
  }).then((response) => {
    // return response.json();
    console.log(response)
  })

  // .then((data) => {
  //   console.log(data)
  // }).catch((ex) => {
  //   console.log('error: ', ex)
  // });


}


export { tokenToPersonalData }
