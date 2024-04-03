import { Main } from "./templates/main.mjs"

let state = { counter: 0 }

const render = () => (document.body.innerHTML = Main({ state }))

const reducer = (e) => {
  const { slice, action } = e.target.dataset

  const actions = {
    counterSlice: {
      increment: () => {
        state.counter = state.counter + 1
      },
      decrement: () => {
        state.counter = state.counter - 1
      },
      incrementBy10: () => {
        state.counter = state.counter + 10
      },
    },
  }

  actions[slice][action]()
  render()
}

// single listener for all clicks
document.addEventListener("click", reducer)

render()
