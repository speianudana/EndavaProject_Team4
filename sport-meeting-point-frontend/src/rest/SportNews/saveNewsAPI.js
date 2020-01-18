import { url } from '../../utils/server-url'

export default function saveNews ({
  title,
  context,
  image
},
token) {
  const formData = new FormData()
  const jsonData = JSON.stringify({
    title: title,
    context: context
  })

  // console.log(image)
  formData.append('imageFile', image)
  formData.append('jsonData', jsonData)

  const config = {
    method: 'POST',
    headers: {
      Authorization: `Bearer_${token}`
    },
    body: formData
  }

  fetch(`${url}/api/for_authenticated_user/save_news`, config)
    .then(data => {
      console.log('success')
    })
    .catch(err => {
      console.warn('error:', err)
    })
}
