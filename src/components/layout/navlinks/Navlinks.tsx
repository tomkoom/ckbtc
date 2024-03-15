import { FC } from "react"
import styled from "styled-components"
import { NavItem } from "./_index"

const Navlinks: FC = (): JSX.Element => {
  return (
    <NavlinksStyled>
      <div>
        <NavItem label="Home" route={() => {}} />
      </div>
    </NavlinksStyled>
  )
}

const NavlinksStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 0 1rem;

  > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
`

export default Navlinks
