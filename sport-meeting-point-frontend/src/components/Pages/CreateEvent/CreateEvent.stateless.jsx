import React, { useState } from 'react'
import style from './style.scss'
import { Container } from '../../Layouts/Container'
import { ButtonA } from '../../Layouts/Button'
import imageReader from '../../../utils/image-reader'

// const thumbnailSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22508%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20508%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16544932167%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16544932167%22%3E%3Crect%20width%3D%22508%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22169.7578125%22%20y%3D%22123.9%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

const validationLimit = {
  title: 64,
  previewMessage: 200,
  description: 1000,
  address: 128,
}


export default function CreateEventStateless({ handleAllInputData, validationMessage }) {

  const [data, setData] = useState(
    {
      title: '',
      address: '',
      previewMessage: '',
      description: '',
      image: null
    }
  )




  return (
    <Container>
      <div className={style.mainContainer}>
        <p id={style.pageTitle}>Create event</p>

        <p>1) Event title: </p>
        <input
          style={{ border: data.title.length > validationLimit.title ? 'solid 3px red' : '' }}
          onChange={e => setData({ ...data, title: e.target.value })}
          value={data.title}
          className={style.inputText}
          type="text"
        />

        <p>2) Address: </p>
        <input
          style={{ border: data.address.length > validationLimit.address ? 'solid 3px red' : '' }}
          onChange={e => setData({ ...data, address: e.target.value })}
          value={data.address}
          className={style.inputText}
          type="text"
        />

        <p>3) Preview message: </p>
        <textarea
          // style={{ color: 'red' }}
          onChange={e => setData({ ...data, previewMessage: e.target.value })}
          value={data.previewMessage}
          style={{ height: '90px' }}
          className={style.inputText} >

        </textarea>

        <p>4) Description: </p>
        <textarea
          // style={{ border: data.description.length > validationLimit.description ? 'solid 3px red' : '' }}
          onChange={e => setData({ ...data, description: e.target.value })}
          value={data.description}
          style={{ height: '150px' }}
          className={style.inputText} >

        </textarea>

        <input
          type="file"
          onChange={e => setData({ ...data, image: e.target.files[0] })}
        // onChange={e => {
        //   imageReader.convertFileToRawData(e.target.files[0])
        //     .then(imgRawData => setData({ ...data, image: imgRawData }))
        // }}
        />

        {/* <img src={data.image} alt="" /> */}

        <ButtonA
          onClick={e => handleAllInputData(data)}
          style={{ margin: '20px' }}
          title='Save event'
        />

        {
          validationMessage.map((a, i) => (
            <p key={i} style={{ color: 'red', margin: '7px' }}>
              *{a}
            </p>)
          )
        }


      </div>
    </Container>
  )
}
