
const imageReader = {

  convertFileToRawData: file => new Promise(resolve => {

    let reader = new FileReader()

    reader.onloadend = () => resolve(reader.result)

    reader.readAsDataURL(file)

  }),




}


export default imageReader