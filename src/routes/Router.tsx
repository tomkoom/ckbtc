import {
  // createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// components
import Layout from "@/components/layout/Layout"
import { Home, Stats, Mint, Transactions } from "@/pages/_index"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<p>not found</p>}>
      <Route index element={<Home />} />
      <Route path="stats" element={<Stats />} />
      <Route path="mint" element={<Mint />} />
      <Route path="transactions" element={<Transactions />} />
    </Route>,
  ),
)

export default router
