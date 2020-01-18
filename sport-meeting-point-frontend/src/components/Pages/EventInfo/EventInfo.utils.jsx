import React from 'react'
import PropTypes from 'prop-types'

const ParticipantView = ({ arr }) => (
  <>
    {
      arr.map((a, i) => (
        <p key={i}>
          {a.firstName} {a.lastName}  -  {a.email}
        </p>
      ))
    }
  </>
)

ParticipantView.propTypes = {
  arr: PropTypes.array
}

export { ParticipantView }
