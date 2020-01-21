export default function fileToBase64String (file) {
  return new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = function () {
      const comma = this.result.indexOf(',')
      const base64 = this.result.substr(comma + 1)
      resolve(base64)
    }
    reader.readAsDataURL(file)
  })
}
