import { FC } from "react"
import { styled } from "styled-components"
import { NavItem } from "./_index"
import { device } from "@/styles/breakpoints"
import { useNavigate } from "react-router-dom"

const Navlinks: FC = (): JSX.Element => {
  const navigate = useNavigate()

  const nav = (pathname: string) => {
    navigate({
      pathname,
    })
  }

  const navlinks = [
    { label: "Overview", route: () => nav("/") },
    { label: "Transactions", route: () => nav("txs") },
    { label: "Stats", route: () => nav("stats") },
    { label: "Mint", route: () => nav("mint") },
    { label: "ckBTC dApps", route: () => nav("/") },
  ]

  return (
    <NavlinksStyled>
      <ul className="navlinks">
        {navlinks.map((navlink, i) => (
          <li key={navlink.label}>
            <NavItem label={navlink.label} route={navlink.route} />
            {i + 1 < navlinks.length && <hr />}
          </li>
        ))}
      </ul>

      <hr />
    </NavlinksStyled>
  )
}

const NavlinksStyled = styled.nav`
  > ul.navlinks {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media ${device.tablet} {
      justify-content: flex-start;
    }

    > li {
      display: flex;
      align-items: center;
      flex: 1;

      @media ${device.tablet} {
        flex: unset;
      }

      > button {
        width: 100%;

        @media ${device.tablet} {
          padding: 0 1rem;
        }
      }

      > hr {
        border: none;
        height: 3rem;
        width: 1px;
        background-color: var(--underlay2);
      }
    }
  }

  > hr {
    border: none;
    height: 1px;
    background-color: var(--underlay2);
    width: 100%;
  }
`

export default Navlinks
