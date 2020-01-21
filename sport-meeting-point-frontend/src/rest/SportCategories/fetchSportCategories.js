import { url } from 'utils/server-url'

export default function fectchSportCategories (token, lang = 'ENGLISH') {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer_${token}`
    }
  }

  return fetch(`${url}/api/for_all/get_all_sport_categories_eng?lang=${lang}`, config)
}
