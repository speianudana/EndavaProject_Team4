import React, { Component } from 'react';
import { Nav, Button, BDiv, BH5 } from 'bootstrap-4-react';
import style from './style.css';
import { Link } from 'react-router-dom'


const Menu = props => (
  <BDiv className={style.mainHeaderProp}
    display="flex"
    flex="column md-row"
    alignItems="center"
    p="3"
    px="md-4"
    mb="3"
    border="bottom"
    shadow="sm"
  >
    <BH5 id={style.logoProps} my="0" mr="md-auto" fontWeight="normal">Sport Meeting Point</BH5>
    <Nav my="2 md-0" mr="md-3">
      <Nav.Item><Link to="/home/index" className={style.aClass} >Features</Link></Nav.Item>
      <Nav.Item><Link to="/home/index" className={style.aClass} >Enterprise</Link></Nav.Item>
      <Nav.Item><Link to="/home/index" className={style.aClass} >Support</Link></Nav.Item>
      <Nav.Item><Link to="/home/index" className={style.aClass} >Pricing</Link></Nav.Item>
    </Nav>
    <Button id={style.btn01} outline>Sign up</Button>
  </BDiv>
)



export default function HeaderStateless() {
  return (
    <React.Fragment>
      <Menu />

    </React.Fragment>
  );
}