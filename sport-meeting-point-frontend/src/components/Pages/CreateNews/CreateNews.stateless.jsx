import React, { useState, useEffect } from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'
import fileToBase64String from 'utils/fileToBase64String'
import * as categoryUtils from 'data/SportCategories/SportCategories.dictionary'

const validationLimit = {
  title: 64,
  context: 2000
}

const ValidationMsg = ({ msg }) => (
  <p style={{ color: 'red', margin: '20px 0 0 0' }}>
    {msg}
  </p>
)

ValidationMsg.propTypes = {
  msg: PropTypes.string
}

export default function CreateNewsStateless ({ onHandleAllInputData, validationMessage, allCategories }) {
  const [data, setData] = useState(
    {
      title: '',
      context: '',
      selectedCategory: categoryUtils.getDefaultKeyForCategory(),
      image: null,
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
    <div className={style.createNewsContainer}>
      <div className={style.createNewsCard}>
        <h1 className={style.tTitle}>
          Create News
        </h1>

        {data.title.length > validationLimit.title && <ValidationMsg msg='News title too long' />}
        <div className={`${style.createNewsField} ${style.inputRight}`}>
          <label className={style.createNewsFieldLabelPartial}>Title</label>
          <input
            className={style.inputText}
            type='text'
            placeholder='ex. Football Championship'
            onChange={e => setData({ ...data, title: e.target.value })}
            value={data.title}
          />
        </div>

        {data.context.length > validationLimit.context &&
          <ValidationMsg msg='News preview message too long' />}
        <div className={`${style.createNewsField} ${style.inputBottom}`}>
          <label className={style.createNewsFieldLabelFullWidth}>Context</label>
          <textarea
            rows='11'
            className={style.inputText}
            onChange={e => setData({ ...data, context: e.target.value })}
            value={data.description}
          />
        </div>

        <div style={{ flexDirection: 'column' }} className={`${style.createNewsField} ${style.inputRight}`}>
          <div className={style.dDownContainer}>
            <button className={style.newsCategoryBtn}>Event Category &rsaquo;&rsaquo;</button>

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

        <div className={`${style.createNewsField} ${style.inputBottom}`}>
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

        <div className={`${style.createNewsField} ${style.inputRight}`}>
          <button
            className={style.submitBtn}
            onClick={e => onHandleAllInputData(data)}
          >
            Create news
          </button>
        </div>

      </div>
    </div>
  )
}

CreateNewsStateless.propTypes = {
  onHandleAllInputData: PropTypes.func,
  validationMessage: PropTypes.array,
  allCategories: PropTypes.array
}
