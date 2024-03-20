import { useNavigate } from "react-router-dom"

interface Navlink {
  label: string
  pathname: string
  route: () => void
}

interface UseNavlinks {
  navlinks: Navlink[]
}

export const useNavlinks = (): UseNavlinks => {
  const navigate = useNavigate()

  const nav = (pathname: string): void => {
    navigate({
      pathname,
    })
  }

  const navlinks: Navlink[] = [
    { label: "Overview", pathname: "/", route: () => nav("/") },
    { label: "Transactions", pathname: "/txs", route: () => nav("txs") },
    { label: "Mint", pathname: "/mint", route: () => nav("mint") },
    { label: "Stats", pathname: "/stats", route: () => nav("stats") },
    { label: "ckBTC dApps", pathname: "/dapps", route: () => nav("dapps") },
  ]

  return { navlinks }
}
