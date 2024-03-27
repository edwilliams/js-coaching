import React from "react"
import Home from "./components/Home"
import ContextDemo from "./components/ContextDemo"
import ReduxDemo from "./components/ReduxDemo"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/context-demo" element={<ContextDemo />} />
      <Route path="/redux-demo" element={<ReduxDemo />} />
    </Routes>
  )
}

export default App
