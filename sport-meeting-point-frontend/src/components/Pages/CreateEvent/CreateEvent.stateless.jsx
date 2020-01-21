import React, { useState, useEffect } from 'react'
import style from './style.scss'
// import { Container } from '../../Layouts/Container'
// import { ButtonA } from '../../Layouts/Button'
import PropTypes from 'prop-types'
import getCurrentDate from '../../../utils/getCurrentDate'
import fileToBase64String from 'utils/fileToBase64String'
import * as categoryUtils from '../../../redux/SportCategories/SportCategories.dictionary.js'
// const validationLimit = {
//   title: 64,
//   previewMessage: 200,
//   description: 1000,
//   address: 128
// }

const ValidationMsg = ({ msg }) => (
  <p style={{ color: 'red' }}>
    {msg}
  </p>
)

ValidationMsg.propTypes = {
  msg: PropTypes.string
}

export default function CreateEventStateless ({ handleAllInputData, validationMessage, allCategories }) {
  const [data, setData] = useState(
    {
      title: '',
      address: '',
      previewMessage: '',
      description: '',
      date: getCurrentDate(),
      image: null,
      selectedCategory: null,

      imgBase64: ''

    }
  )

  useEffect(() => {
    if (data.image !== null) {
      fileToBase64String(data.image)
        .then(base64Img => setData({ ...data, imgBase64: base64Img }))
    }
  }, [data.image])

  return (
    <div className={style.createEventContainer}>
      <div className={style.createEventCard}>
        <h1 className={style.tTitle}>
          Create event
        </h1>

        <div className={`${style.createEventField} ${style.inputRight}`}>
          <label className={style.createEventFieldLabelPartial}>Title</label>
          <input
            className={style.inputText}
            type='text'
            placeholder='ex. Football Championship'
            onChange={e => setData({ ...data, title: e.target.value })}
            value={data.title}
          />
        </div>

        <div className={`${style.createEventField} ${style.inputRight}`}>
          <label className={style.createEventFieldLabelPartial}>Address</label>
          <input
            className={style.inputText}
            type='text'
            placeholder='ex. St. Studentilor'
            onChange={e => setData({ ...data, address: e.target.value })}
            value={data.address}
          />
        </div>

        <div className={`${style.createEventField} ${style.inputRight}`}>
          <label className={style.createEventFieldLabelPartial}>EventDate</label>
          <input
            className={style.inputText}
            onChange={e => setData({ ...data, date: e.target.value })}
            type='date'
            data-date=''
            data-date-format='DD MMMM YYYY'
          />
        </div>

        <div className={`${style.createEventField} ${style.inputBottom}`}>
          <label className={style.createEventFieldLabelFullWidth}>Preview message</label>
          <textarea
            rows='7'
            className={style.inputText}
            onChange={e => setData({ ...data, previewMessage: e.target.value })}
            value={data.previewMessage}
          />
        </div>

        <div className={`${style.createEventField} ${style.inputBottom}`}>
          <label className={style.createEventFieldLabelFullWidth}>Description</label>
          <textarea
            rows='11'
            className={style.inputText}
            onChange={e => setData({ ...data, description: e.target.value })}
            value={data.description}
          />
        </div>

        <div style={{ flexDirection: 'column' }} className={`${style.createEventField} ${style.inputRight}`}>
          <div className={style.dDownContainer}>
            <button className={style.eventCategoryBtn}>Event Category &rsaquo;&rsaquo;</button>

            <ul className={style.dDownContent}>
              {allCategories.length > 0 && allCategories.map((item, index) => (
                <li
                  key={index}
                  className={style.dDownItem}
                  style={{ backgroundColor: data.selectedCategory === item ? 'yellow' : 'transparent' }}
                  onClick={e => {
                    const categoryName = e.target.innerHTML
                    const categoryKey = categoryUtils.valueToKey(categoryName)
                    setData({ ...data, selectedCategory: categoryKey })
                  }}
                >
                  {categoryUtils.keyToValue(item).eng}
                </li>))}
            </ul>
          </div>
        </div>

        <div className={`${style.createEventField} ${style.inputBottom}`}>
          <label className={style.loadImage}>
            <input
              type='file'
              style={{ display: 'none' }}
              onChange={e => {
                setData({ ...data, image: e.target.files[0] })
              }}
            />
              Upload image
          </label>
          <div className={style.boxForImg}>
            <img src={'data:image/jpg;base64,' + data.imgBase64} height='200px' width='200px' />
          </div>
        </div>

        <div className={`${style.createEventField} ${style.inputRight}`}>
          <button
            className={style.submitBtn}
            onClick={e => handleAllInputData(data)}
          >

            Create event
          </button>
        </div>

        {
          validationMessage.map((a, i) => (
            <p key={i} style={{ color: 'red', margin: '7px' }}>
                          *{a}
            </p>)
          )
        }

      </div>
    </div>
  )
}

CreateEventStateless.propTypes = {
  handleAllInputData: PropTypes.func,
  validationMessage: PropTypes.array,
  allCategories: PropTypes.array
}
