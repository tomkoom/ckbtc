import { FC } from "react"
import { styled } from "styled-components"
import { NavItem } from "./_index"
import { useNavlinks } from "@/hooks/_index"

const Navlinks: FC = (): JSX.Element => {
  const { navlinks } = useNavlinks()

  return (
    <NavlinksStyled>
      <ul className="navlinks">
        {navlinks.map((navlink) => (
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
