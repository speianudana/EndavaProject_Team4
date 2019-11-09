import React, { Component } from 'react'

import { Container } from 'bootstrap-4-react'

import User from './TestRedux/User.jsx'
import Year from './TestRedux/Year.jsx'
import setYearAction from './TestRedux/Year.action.jsx'

import { connect } from 'react-redux'

class IndexStatefull extends Component {
  constructor(props) {
    super(props)



  }

  render() {
    return (
      <Container>
        <User user={this.props.user} />
        <Year year={this.props.year} setYear={this.props.setYearFunction} />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.user,
    year: state.userInfo.year
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setYearFunction: year => {
      dispatch(setYearAction(year))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexStatefull)