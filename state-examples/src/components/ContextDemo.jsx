import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useLabels } from "../providers/LabelsProvider"
import { useUser } from "../providers/UserProvider"

const ContextDemo = () => {
  const refName = useRef()
  const refAge = useRef()
  const { greeting } = useLabels()
  const { userData, updateUser } = useUser()

  return (
    <div>
      <Link to="/">Home</Link>
      <p>
        {greeting}. Name is {userData.name} and age is {userData.age}
      </p>
      <input type="text" ref={refName} />
      <button
        onClick={() => updateUser({ key: "name", val: refName.current.value })}
      >
        update name
      </button>

      <br />

      <input type="number" ref={refAge} />
      <button
        onClick={() => updateUser({ key: "age", val: refAge.current.value })}
      >
        update age
      </button>
    </div>
  )
}

export default ContextDemo
