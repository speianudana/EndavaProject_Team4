import React, { Component } from 'react'

export default class UserPersonalDataComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setInterval(() => {
      console.log(Math.random() * 10)
    }, 3000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }



  render() {
    return (
      <>
      </>
    )
  }
}
