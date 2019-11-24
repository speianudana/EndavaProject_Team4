import axios from 'axios'
import { adress } from './server-adress'
import { tokenWorker } from './token-worker'

function tokenToPersonalData() {
  return new Promise((resolve, reject) => {
    const token = tokenWorker.loadTokenFromLocalStorage()
    if (token === null) reject('token not found in local storage!!!');

    // var config = {
    //   headers: { 'Authorization': "Bearer_" + token }
    // };

    axios.post(`${adress}/api/user_personal_data/get_data`, token).then(res => {
      resolve(res.data.personalData)
    }).catch(error => {
      reject(error)
    })
  });




}

export { tokenToPersonalData }
