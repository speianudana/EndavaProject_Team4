import React from 'react'
import {
  Container,
  Row,
  Col,
  Display4,
  Lead,
  Button,
  List,
  BNav,
  BA,
  BDiv,
  BSvg,
  BSmall
} from 'bootstrap-4-react';


const style = {
  siteHeader: {
    backgroundColor: 'rgba(0, 0, 0, .85)',
    a: {
      color: '#999'
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
        <BSmall display="block" mb="3" text="muted">&copy; 2017-2018</BSmall>
      </Col>
      <Col col="6 md">
        <h5>Features</h5>
        <List unstyled>
          <List.Item><BA text="muted" href="#">Cool stuff</BA></List.Item>
          <List.Item><BA text="muted" href="#">Random feature</BA></List.Item>
          <List.Item><BA text="muted" href="#">Team feature</BA></List.Item>
          <List.Item><BA text="muted" href="#">Stuff for developers</BA></List.Item>
          <List.Item><BA text="muted" href="#">Another one</BA></List.Item>
          <List.Item><BA text="muted" href="#">Last time</BA></List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h5>Resources</h5>
        <List unstyled>
          <List.Item><BA text="muted" href="#">Resource</BA></List.Item>
          <List.Item><BA text="muted" href="#">Resource name</BA></List.Item>
          <List.Item><BA text="muted" href="#">Another resource</BA></List.Item>
          <List.Item><BA text="muted" href="#">Final resource</BA></List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h5>Resources</h5>
        <List unstyled>
          <List.Item><BA text="muted" href="#">Business</BA></List.Item>
          <List.Item><BA text="muted" href="#">Education</BA></List.Item>
          <List.Item><BA text="muted" href="#">Government</BA></List.Item>
          <List.Item><BA text="muted" href="#">Gaming</BA></List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h5>About</h5>
        <List unstyled>
          <List.Item><BA text="muted" href="#">Team</BA></List.Item>
          <List.Item><BA text="muted" href="#">Locations</BA></List.Item>
          <List.Item><BA text="muted" href="#">Privacy</BA></List.Item>
          <List.Item><BA text="muted" href="#">Terms</BA></List.Item>
        </List>
      </Col>
    </Row>
  </Container>
)

style.product.device2 = Object.assign({}, style.product.device, {
  top: '-25%',
  right: 'auto',
  bottom: '0',
  left: '5%',
  backgroundColor: '#e5e5e5'
});

export default function FooterStateless() {
  return (
    <footer>
      <Footer />
    </footer>
  )
}
