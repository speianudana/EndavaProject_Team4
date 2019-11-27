import User from './User.jsx'
import Year from './Year.jsx'
import setYearAction from './Year.action.jsx'
import { connect } from 'react-redux'

import React, { Component } from 'react'

class TestRedux extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <User user={this.props.user} />
        <Year year={this.props.year} setYear={this.props.setYearFunction} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    username: state.auth.username
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setYearFunction: year => {
      dispatch(setYearAction(year))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux)