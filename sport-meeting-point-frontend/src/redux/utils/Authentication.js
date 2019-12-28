import CryptoJS from 'crypto-js'

function cryptor (value, encrypt) {
  const secretKey = 'secret_key'

  return encrypt
    ? CryptoJS.TripleDES.encrypt(value, secretKey)
    : CryptoJS.TripleDES.decrypt(value, secretKey).toString(CryptoJS.enc.Utf8)
}

export function saveTokenInLocalStorage (token) {
  window.localStorage.setItem('token', cryptor(token, true))
}

export function loadTokenFromLocalStorage () {
  return window.localStorage.getItem('token')
}
