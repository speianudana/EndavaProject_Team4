import React from 'react'
import { Row, Col, Card, Div } from 'bootstrap-4-react'
import exampleImg from '../../../../static/example.jpg'

export default function ArticleType1Stateless(props) {
  return (

    <Card mb="4">
      <h4>{props.children}</h4>
      <img src={exampleImg} alt="" />
    </Card>

  )
}
