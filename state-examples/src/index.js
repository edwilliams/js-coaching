import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { LabelsProvider } from "./providers/LabelsProvider"
import { UserProvider } from "./providers/UserProvider"

import { store } from "./redux-store"
import { Provider as ReduxProvider } from "react-redux"

ReactDOM.render(
  <ReduxProvider store={store}>
    <LabelsProvider language="en">
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </LabelsProvider>
  </ReduxProvider>,
  document.getElementById("root")
)
