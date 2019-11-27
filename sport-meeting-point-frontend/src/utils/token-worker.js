import CryptoJS from 'crypto-js'
import axios from 'axios'
import { adress } from '../utils/server-adress'

const webSite = 'sport-meeting-point'//key for token data

//value - data, encrypt [true, false]
function cryptor(value, encrypt) {
  const secretKey = 'cyber_security_forever'

  return encrypt ?
    CryptoJS.TripleDES.encrypt(value, secretKey) :
    CryptoJS.TripleDES.decrypt(value, secretKey).toString(CryptoJS.enc.Utf8)


}

const tokenWorker = {
  saveTokenInLocalStorage: (token) => {
    window.localStorage.setItem(webSite, cryptor(token, true))
  },

  loadTokenFromLocalStorage() {
    const data = window.localStorage.getItem(webSite)
    if (data === null) return null
    const result = cryptor(data, false)
    if (typeof result == 'string' && result.length === 0) throw 'invalid'
    return result
  },

  deleteTokenFromLocalStorage() {
    window.localStorage.removeItem(webSite)
  },

  haveToken() {
    if (window.localStorage.getItem(webSite)) return true

    return false
  },

  sendTokenToServerAndCheckIfIsValid() {
    return new Promise((resolve, reject) => {
      let config = {
        headers: { 'Authorization': 'Bearer_ ' + this.loadTokenFromLocalStorage() },
      }

      axios.get(`${adress}/api/token/is_valid`, config).then(res => {
        if (res.status === 200) {
          resolve(res.data)

        }
      }).catch(function (error) {
        reject(error)
      });
    })
  }

}


export { tokenWorker }

