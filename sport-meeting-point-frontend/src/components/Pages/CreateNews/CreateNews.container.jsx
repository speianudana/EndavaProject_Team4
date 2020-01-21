import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CreateNewsStatefull from './CreateNews.statefull.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fecthSportCategories } from 'data/SportCategories/SportCategories.action'

class CreateNewsContainer extends Component {
  componentDidMount () {
    if (this.props.allSportCategories.length === 0) {
      this.props.fecthSportCategories(this.props.getToken())
    }
  }

  render () {
    return (
      <CreateNewsStatefull
        getToken={this.props.getToken}
        allSportCategories={this.props.allSportCategories}
      />
    )
  }
}

const mapStateToProps = state => ({
  getToken: state.authenticationData.getToken,
  allSportCategories: state.allSportCategoriesData.allSportCategories
})

const mapDispatchToProps = dispatch => {
  return {
    fecthSportCategories: bindActionCreators(fecthSportCategories, dispatch)
  }
}

CreateNewsContainer.propTypes = {
  allSportCategories: PropTypes.array,
  fecthSportCategories: PropTypes.func,
  getToken: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewsContainer)
