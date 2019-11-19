import React from 'react'
import {
  Card,
  BDiv,
  BH3,
  BImg
} from 'bootstrap-4-react';
import { Link } from 'react-router-dom'

const thumbnail = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165d3e49a3c%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165d3e49a3c%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'

const style = {
  h: {
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif'
  },
  featured: {
    card: {
      height: '250px',
      image: {
        borderRadius: '0 3px 3px 0'
      }
    }
  }
}

export default function NewsArticle(props) {
  return (
    <Card flex="md-row" mb="2" shadow="sm" style={style.featured.card}>
      <Card.Body display="flex" flex="column" alignItems="start">
        <BH3 mb="0" style={style.h}>
          <Link to="/">{props.title}</Link>
        </BH3>
        <BDiv text="muted" mb="1">{props.date}</BDiv>
        <small>{props.text}</small>
      </Card.Body>
      <BImg src={thumbnail} flex="auto" display="none lg-block" />
    </Card>
  )
}
