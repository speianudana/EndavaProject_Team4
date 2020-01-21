import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import CreateEventStatefull from './CreateEvent.statefull.jsx'
import { fecthSportCategories } from '../../../redux/SportCategories/SportCategories.action'

class CreateEventContainer extends Component {
  componentDidMount () {
    if (this.props.allSportCategories.length === 0) {
      this.props.fecthSportCategories()
    }
  }

  render () {
    return (
      <CreateEventStatefull
        getToken={this.props.getToken}
        allCategories={this.props.allSportCategories}
      />
    )
  }
}

const mapStateToProps = state => ({
  allSportCategories: state.allSportCategoriesData.allSportCategories,
  getToken: state.authenticationData.getToken
})

const mapDispatchToProps = dispatch => {
  return {
    fecthSportCategories: bindActionCreators(fecthSportCategories, dispatch)
  }
}

CreateEventContainer.propTypes = {
  allSportCategories: PropTypes.array,
  fecthSportCategories: PropTypes.func,
  getToken: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventContainer)
