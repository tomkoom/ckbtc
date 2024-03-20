import { FC } from "react"
import { styled } from "styled-components"
import { useNavlinks } from "@/hooks/_index"
import { useLocation } from "react-router-dom"

const Navlinks: FC = (): JSX.Element => {
  const { navlinks } = useNavlinks()
  const location = useLocation()
  return (
    <NavlinksStyled>
      <ul className="navlinks">
        {navlinks.map((navlink) => (
          <li
            className={location.pathname === navlink.pathname ? "active" : undefined}
            key={navlink.label}
            onClick={navlink.route}
          >
            {navlink.label}
          </li>
        ))}
      </ul>
    </NavlinksStyled>
  )
}

const NavlinksStyled = styled.div`
  > ul.navlinks {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;

    > li {
      font-weight: var(--fwMedium);
      cursor: pointer;
      color: var(--tertiaryColor);
      transition: var(--transition1);

      &:hover {
        color: var(--primaryColor);
      }

      &.active {
        color: var(--primaryColor);
      }
    }
  }
`

export default Navlinks
