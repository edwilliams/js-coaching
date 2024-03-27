import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "../counter-slice"

const ReduxDemo = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Link to="/">Home</Link>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment by 10
      </button>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default ReduxDemo
