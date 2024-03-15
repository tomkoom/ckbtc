import { FC } from "react"
import { RouterProvider } from "react-router-dom"
import { Router } from "@/routes/_index"

const App: FC = (): JSX.Element => {
  return <RouterProvider router={Router} />
}

export default App
