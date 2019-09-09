// const $ = require("jquery")

// $("#target").html("hello everyone!")
import React from "react"
import { render } from "react-dom"

const About = () => {
  return (
    <div>
      <h1>Abouttttt</h1>
    </div>
  )
}

render(<About />, document.getElementById("target"))
