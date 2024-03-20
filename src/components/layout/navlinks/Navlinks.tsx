import { FC } from "react"
import { styled } from "styled-components"
import { NavItem } from "./_index"
import { useNavigate } from "react-router-dom"

const Navlinks: FC = (): JSX.Element => {
  const navigate = useNavigate()

  const nav = (pathname: string) => {
    navigate({
      pathname,
    })
  }

  const navlinks = [
    { label: "Overview", pathname: "/", route: () => nav("/") },
    { label: "Transactions", pathname: "/txs", route: () => nav("txs") },
    { label: "Stats", pathname: "/stats", route: () => nav("stats") },
    { label: "Mint", pathname: "/mint", route: () => nav("mint") },
    { label: "ckBTC dApps", pathname: "/dapps", route: () => nav("dapps") },
  ]

  return (
    <NavlinksStyled>
      <ul className="navlinks">
        {navlinks.map((navlink, i) => (
          <NavItem key={navlink.label} label={navlink.label} pathname={navlink.pathname} route={navlink.route} />
        ))}
      </ul>
    </NavlinksStyled>
  )
}

const NavlinksStyled = styled.nav`
  > ul.navlinks {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > li {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 0 1.5rem;
    }
  }
`

export default Navlinks
