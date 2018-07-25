import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestData } from './actions/index'

class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestData())
  }

  render () {
    const { isFetchingAllData, allData, dispatch } = this.props

    console.log(allData)

    return (
      <div>
        <div className="container">
          <header>
            <h1>React Redux Starter</h1>

            <div className="card">
              <div className="card-body">
                <p>Starter kit for using React & Redux</p>
              </div>
            </div>
          </header>
        </div>
      </div>
    )

  }

}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { requestData, requestDetails } = state.rootReducer
  return {
    isFetchingAllData: requestData.isFetching,
    allData: requestData.data
  }
}

export default connect(mapStateToProps)(App)