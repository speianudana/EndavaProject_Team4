import axios from 'axios'
import { adress } from './server-adress'
import { tokenWorker } from './token-worker'


function tokenToPersonalData() {
  const token = tokenWorker.loadTokenFromLocalStorage()
  if (token === null) console.log('token not found in local storage!!!');

  console.log(token)

  fetch(adress + '/api/user_personal_data/get_data', {
    method: 'POST',
    headers: { 
      'Authorization': 'Bearer_'+token
    },
  }).then((response) => {
    return response.json();
  }).then(data => {
    console.log(data)
  }).catch(err => console.log(err))

//  axios({
//   method: 'post', //you can set what request you want to be
//   url: adress + '/api/user_personal_data/get_data',
//   headers: {
//     Authorization: 'Bearer ' + token
//   }
// })

}


export { tokenToPersonalData }
