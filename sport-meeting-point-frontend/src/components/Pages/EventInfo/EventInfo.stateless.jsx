import React from 'react'
import style from './style.scss'
import { Container } from '../../Layouts/Container'
import PropTypes from 'prop-types'

import noImage from '../../../../static/No-Image-Basic.png'

import { ButtonA } from '../../Layouts/Button'

export default function EventInfoStateless({
  title, previewMsg, description, authorFullName, eventDate, address, image, participants }) {


  return (
    <Container>

      <div id={style.mainContainer}>
        <h1>{title}</h1>
        <br />
        <br />

        <p> Author: {authorFullName}</p>
        <p> Event date: {eventDate}</p>
        <p> Address: {address}</p>
        <br />


        <h4>Preview message:</h4>
        <p >{previewMsg}</p>
        <br />
        <br />


        <div>
          <img src={image} className={`${style.imgProp} ${style.leftimg}`} alt="" />
          <h4>Description:</h4>
          {description}
        </div>
        <br />
        <br />

        <h4>Participants:</h4>
        <p>1, 2, 3, 4</p>
        <br />
        <br />

        <div id={style.rectForButtonParticipate}>
          <ButtonA className={style.participateBtn} title="Participate" />
        </div>

      </div>


    </Container>

  )
}

EventInfoStateless.propTypes = {
  title: PropTypes.string,
  previewMsg: PropTypes.string,
  description: PropTypes.string,
  authorFullName: PropTypes.string,
  eventDate: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.string,
  participants: PropTypes.array,
}

EventInfoStateless.defaultProps = {
  authorFullName: 'unknown',
  eventDate: '???',
  address: '???',
  image: noImage,
  participants: []

}
