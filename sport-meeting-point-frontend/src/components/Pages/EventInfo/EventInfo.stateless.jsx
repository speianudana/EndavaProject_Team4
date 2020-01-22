import React from 'react'
import style from './style.scss'
import { Container } from '../../Layouts/Container'
import PropTypes from 'prop-types'
import * as categoryUtils from 'data/SportCategories/SportCategories.dictionary'

import { ButtonA } from '../../Layouts/Button'

export default function EventInfoStateless ({
  title, previewMessage, description, authorFullName,
  eventDate, address, image, participants, alreadyParticipating,
  onNotParticipateClick, onParticipateClick, category
}) {
  return (
    <Container>

      <div id={style.mainContainer}>
        <h1>{title}</h1>
        {
          alreadyParticipating &&
            <span style={{ color: 'green' }}>
            You are participating
            </span>
        }
        <br />
        <br />

        <p> Author: {authorFullName}</p>
        <p> Event date: {eventDate}</p>
        <p> Address: {address}</p>
        <p> Category: {categoryUtils.keyToValue(category).eng}</p>
        <br />

        <h4>Preview message:</h4>
        <p>{previewMessage}</p>
        <br />
        <br />

        <div>
          <img src={image} className={`${style.imgProp} ${style.leftimg}`} alt='' />
          <h4>Description:</h4>
          {description}
        </div>
        <br />
        <br />

        <h4>Participants:</h4>
        <br />
        {
          participants
        }
        <br />
        <br />

        <div id={style.rectForButtonParticipate}>

          {!alreadyParticipating &&
            <ButtonA
              onClick={e => onParticipateClick(e)}
              className={style.participateBtn}
              title='Participate'
            />}

          {alreadyParticipating &&
            <ButtonA
              onClick={e => onNotParticipateClick(e)}
              className={style.participateBtn}
              title='Not participate'
            />}

        </div>

      </div>

    </Container>

  )
}

EventInfoStateless.propTypes = {
  title: PropTypes.string,
  previewMessage: PropTypes.string,
  description: PropTypes.string,
  authorFullName: PropTypes.string,
  eventDate: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.string,
  participants: PropTypes.node,
  alreadyParticipating: PropTypes.bool,
  onNotParticipateClick: PropTypes.func,
  onParticipateClick: PropTypes.func,
  category: PropTypes.string
}

EventInfoStateless.defaultProps = {

}
