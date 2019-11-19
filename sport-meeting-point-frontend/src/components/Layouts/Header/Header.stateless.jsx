import React, { Component } from 'react';
import { Nav, Button, BDiv, BH5 } from 'bootstrap-4-react';
import style from './style.css';
import { Link } from 'react-router-dom'
import { index, regestr } from '../../App/AppConstRoutes.js'

const Menu = props => (
  <BDiv className={style.mainHeaderProp}
    display="flex"
    flex="column md-row"
    alignItems="center"
    p="3"
    px="md-4"
    border="bottom"
    shadow="sm"
  >
    <BH5 my="0" mr="md-auto" fontWeight="normal">
      <Link id={style.logoProps} to={index} >Sport Meeting Point</Link>
    </BH5>

    <Nav my="2 md-0" mr="md-3">
      <Nav.Item><Link to={index} className={style.aClass} >Home</Link></Nav.Item>
      <Nav.Item><Link to={index} className={style.aClass} >About</Link></Nav.Item>
      <Nav.Item><Link to={index} className={style.aClass} >Support</Link></Nav.Item>
      <Nav.Item><Link to={index} className={style.aClass} >Features</Link></Nav.Item>
    </Nav>

    <Link to={regestr}><Button id={style.btn01}>Sign up</Button></Link>

  </BDiv>
)



export default function HeaderStateless() {
  return (
    <React.Fragment>
      <Menu />
    </React.Fragment>
  );
}