import React from "react"
import ReactDOM from "react-dom"
import { hot } from "react-hot-loader"

import App from "./app/app.js"

import "./sass/style.scss"

const AppWithHot = hot(module)(App)

var mountNode = document.getElementById("app")
ReactDOM.render(<AppWithHot />, mountNode)