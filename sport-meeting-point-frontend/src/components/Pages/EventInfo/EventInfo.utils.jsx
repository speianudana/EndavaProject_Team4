import React, { Component } from 'react'

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

export { ParticipantView }