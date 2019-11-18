import React from 'react'
import {
  Container,
  Row,
  Col,
  List,
  BA,
  BSmall
} from 'bootstrap-4-react';
import style1 from './style.scss'
import { Link } from 'react-router-dom'

const style = {
  siteHeader: {
    backgroundColor: 'rgba(0, 0, 0, .85)',
    a: {
      color: 'white'
    }
  },
  product: {
    overflow: 'hidden',
    device: {
      position: 'absolute',
      right: '10%',
      bottom: '-30%',
      width: '300px',
      height: '540px',
      backgroundColor: '#333',
      borderRadius: '21px',
      transform: 'rotate(30deg)',
      '::before': {
        position: 'absolute',
        top: '10%',
        right: '10px',
        bottom: '10%',
        left: '10px',
        backgroundColor: 'rgba(255, 255, 255, .1)',
        borderRadius: '5px'
      }
    }
  },
  headline: {
    flex: '1',
    device: {
      width: '80%',
      height: '300px',
      borderRadius: '21px 21px 0 0'
    }
  }
}


const Footer = props => (
  <Container as="footer" py="5">
    <Row>
      <Col col="12 md">
        <BSmall style={{ color: 'rgb(221, 221, 221)' }} display="block" mb="3" >&copy; 2019 - ~~~~</BSmall>
      </Col>
      <Col col="6 md">
        <h3 className={style1.titleText}>Features</h3>
        <br />
        <List unstyled>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h3 className={style1.titleText}>Resources</h3>
        <br />
        <List unstyled>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h3 className={style1.titleText}>Resources</h3>
        <br />
        <List unstyled>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h3 className={style1.titleText}>About</h3>
        <br />
        <List unstyled>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
          <List.Item>
            <Link className={style1.linkStyle} to={""}>Example</Link>
          </List.Item>
        </List>
      </Col>
    </Row>
  </Container>
)


export default function FooterStateless() {
  return (
    <footer id={style1.footerStyle} >
      <Footer />
    </footer>
  )
}
