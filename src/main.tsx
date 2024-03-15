import React, { FC } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

// state
import { Provider } from "react-redux"
import store from "@/state/_store"

let container: HTMLElement | null = null

document.addEventListener("DOMContentLoaded", function () {
  if (!container) {
    const container = document.getElementById("root") as HTMLElement
    const root = createRoot(container!)
    root.render(<Main />)
  }
})

const Main: FC = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}
