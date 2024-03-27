import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/context-demo">Context Demo</Link>
      </li>
      <li>
        <Link to="/redux-demo">Redux Demo</Link>
      </li>
    </ul>
  )
}

export default Home
