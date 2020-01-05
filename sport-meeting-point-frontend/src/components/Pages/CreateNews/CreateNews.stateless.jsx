import React, { useState } from 'react'
import style from './style.scss'
import { Container } from '../../Layouts/Container'
import { ButtonA } from '../../Layouts/Button'
import PropTypes from 'prop-types'

// const thumbnailSrc = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22508%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20508%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16544932167%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16544932167%22%3E%3Crect%20width%3D%22508%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22169.7578125%22%20y%3D%22123.9%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'

export default function CreateEventStateless({ onHandleAllInputData }) {
  const [data, setData] = useState(
    {
      title: '',
      context: '',
      image: new File([], '')
    }
  )

  return (
    <Container>
      <div className={style.mainContainer}>
        <p id={style.pageTitle}>Create news</p>

        <p>1) News title: </p>
        <br />
        <input
          onChange={e => setData({ ...data, title: e.target.value })}
          value={data.title}
          className={style.inputText}
          type='text'
        />

        <p>2) Context: </p>
        <br />
        <textarea
          onChange={e => setData({ ...data, context: e.target.value })}
          value={data.context}
          style={{ height: '90px' }}
          className={style.inputText}
        />

        <p>3)News image: </p>
        <br />
        <input
          type='file'
          onChange={e => setData({ ...data, image: e.target.files[0] })}
        />

        {data.title.length > 0 && data.context.length > 0 && <ButtonA
          onClick={e => onHandleAllInputData(data)}
          style={{ marginTop: '20px' }}
          title='Save news'
        />}

        <br />
        <br />

        {
          data.title === ''
          && <p style={{ color: 'red', margin: '7px' }}>
            *Title is required
            </p>
        }
        {
          data.context === ''
          && <p style={{ color: 'red', margin: '7px' }}>
            *Title is required
            </p>
        }


      </div>
    </Container>
  )
}

CreateEventStateless.propTypes = {
  onHandleAllInputData: PropTypes.func
}
