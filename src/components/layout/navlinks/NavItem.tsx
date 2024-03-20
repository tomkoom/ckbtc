import { FC, ReactNode } from "react"
import { styled } from "styled-components"
import { useLocation } from "react-router-dom"

interface NavItemProps {
  label: string
  pathname: string
  route: () => void
  // icon?: ReactNode
}

const NavItem: FC<NavItemProps> = ({ label, pathname, route }): JSX.Element => {
  const location = useLocation()

  return (
    <NavItemStyled onClick={route} selected={location.pathname === pathname}>
      {/* {icon && <span className="icon">{icon}</span>} */}
      <span className="label">{label}</span>
    </NavItemStyled>
  )
}

const NavItemStyled = styled.li<{ selected: boolean }>`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: var(--secondaryColor);
  box-shadow: var(--boxShadow2);
  font-size: var(--fs6);
  font-weight: var(--fwMedium);
  cursor: pointer;
  transition: var(--transition1);

  &:hover {
    color: var(--primaryColor);
    background-color: var(--underlay2);
  }

  /* ... */
  color: ${(p) => (p.selected ? "var(--primaryColor)" : null)};
  background-color: ${(p) => (p.selected ? "var(--underlay2)" : null)};

  > span.label {
    white-space: nowrap;

    > span.num {
      color: var(--tertiaryColor);
    }
  }
`

export default NavItem
