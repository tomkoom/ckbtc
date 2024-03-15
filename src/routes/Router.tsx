import {
  // createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// components
import Layout from "@/components/layout/Layout"
import { Home } from "@/pages/_index"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<p>not found</p>}>
      <Route index element={<Home />} />
    </Route>,
  ),
)

export default router
