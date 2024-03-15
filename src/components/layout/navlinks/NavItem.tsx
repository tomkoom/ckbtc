import { FC, ReactNode } from "react"
import { styled } from "styled-components"

interface NavItemProps {
  label: string
  route: () => void
  icon?: ReactNode
}

const NavItem: FC<NavItemProps> = ({ label, route, icon }): JSX.Element => {
  return (
    <NavItemStyled onClick={route}>
      {icon && <span className="icon">{icon}</span>}
      <span className="label">{label}</span>
    </NavItemStyled>
  )
}

const NavItemStyled = styled.button`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: var(--secondaryColor);
  font-size: var(--fs6);
  font-weight: var(--fwMedium);
  cursor: pointer;
  transition: var(--transition1);

  &:hover {
    color: var(--primaryColor);
    background-color: var(--underlay2);
  }

  > span.label {
    white-space: nowrap;

    > span.num {
      color: var(--tertiaryColor);
    }
  }
`

export default NavItem
