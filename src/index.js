import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.js"
import "./components/GlobalCSS/global.css"
import "./components/GlobalCSS/normalize.css"

const reactContentRoot = document.querySelector("#root");

ReactDOM.render(<App />, reactContentRoot)