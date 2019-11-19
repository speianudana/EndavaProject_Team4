import React from 'react'
import {
  Container,
  Jumbotron,
  Button,
  BH1,
  Lead
} from 'bootstrap-4-react';


const MyJumbotron = (props) => {

  const style = {
    heading: {
      fontWeight: '300'
    },
    bckr1: {
      background: 'linear-gradient(rgb(213, 224, 224), rgb(213, 224, 224), rgba(255, 0, 0, 0))'
    }
  }

  const btnIsSelected = '2px solid rgb(64, 64, 128)'

  return (
    <Jumbotron text="center" style={style.bckr1}>
      <Container>
        <BH1 style={style.heading}>Sport meeting point</BH1>
        <Lead text="muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem facere eligendi atque voluptate similique doloribus ipsum possimus fugiat, dolorum, totam doloremque numquam ullam consequuntur.
        </Lead>
      </Container>
      <p>
        <Button style={{ border: btnIsSelected }} primary mx="1" my="2">
          News
        </Button>
        <Button primary mx="1" my="2">
          Events
          </Button>
      </p>
    </Jumbotron>
  )
}

export default function HeaderStateless() {
  return (
    <React.Fragment>
      <MyJumbotron />
    </React.Fragment>
  )
}
