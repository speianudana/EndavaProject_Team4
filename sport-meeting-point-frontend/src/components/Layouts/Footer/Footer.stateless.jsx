import React from 'react'
import style from './style.scss'
// import { Link } from 'react-router-dom'
import { Container } from '../Container'

export default function FooterStateless() {
  return (
    <footer id={style.footerStyle}>
      <Container>
        <h5>Footer</h5>
      </Container>
    </footer>
  )
}
