import { deleteTokenFromLocalStorage } from 'data/utils/Authentication'

export default function handle401error (statusCode = 200, reloadIfError = false) {
  if (statusCode === 401) {
    deleteTokenFromLocalStorage()
    if (reloadIfError) location.reload()
  }
}
