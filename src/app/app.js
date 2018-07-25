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
                    <a href="http://getbootstrap.com/" target="_blank">
                      Bootstrap
                    </a>
                  </li>
                  <li>
                    <a href="https://getuikit.com/" target="_blank">
                      UIkit
                    </a>
                  </li>
                  <li>
                    <a href="https://fontawesome.com/" target="_blank">
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
                    <a href="https://www.npmjs.com/package/classnames" target="_blank">
                      classnames
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/dompurify" target="_blank">
                      dompurify
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/moment" target="_blank">
                      moment
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/prop-types" target="_blank">
                      prop-types
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/react-redux" target="_blank">
                      react-redux
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/react-router-dom" target="_blank">
                      react-router-dom
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/react-router-redux" target="_blank">
                      react-router-redux
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/react-scripts" target="_blank">
                      react-scripts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/redux" target="_blank">
                      redux
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/redux-logger" target="_blank">
                      redux-logger
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/redux-promise" target="_blank">
                      redux-promise
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/redux-thunk" target="_blank">
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