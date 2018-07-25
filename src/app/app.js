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

          <div className="grid">
            <div className="item">
              <div>
                <h2>Libraries included:</h2>

                <ul>
                  <li>
                    <a href="" target="_blank">
                      Bootstrap
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      UIkit
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      Font Awesome
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div>
                <h2>Extra dependencies:</h2>

                <ul>
                  <li>
                    <a href="" target="_blank">
                      classnames
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      dompurify
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      moment
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      prop-types
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      react-redux
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      react-router-dom
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      react-router-redux
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      react-scripts
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      redux
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      redux-logger
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      redux-promise
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      redux-thunk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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