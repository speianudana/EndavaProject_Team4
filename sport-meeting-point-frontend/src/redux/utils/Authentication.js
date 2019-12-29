
export function saveTokenInLocalStorage (token) {
  window.localStorage.setItem('token', token)
}

export function loadTokenFromLocalStorage () {
  const data = window.localStorage.getItem('token')
  if (data) return data
}

export function deleteTokenFromLocalStorage () {
  window.localStorage.removeItem('token')
}
