import { html } from "../utils.mjs"

export const Main = ({ state }) => {
  return html`<div>
    <p>
      <span>Counter</span>
      <span>${state.counter}</span>
    </p>
    <button data-slice="counterSlice" data-action="incrementBy10">
      Increment by 10
    </button>
    <button data-slice="counterSlice" data-action="increment">Increment</button>
    <button data-slice="counterSlice" data-action="decrement">Decrement</button>
  </div>`
}
