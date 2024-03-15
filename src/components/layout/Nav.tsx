import { FC } from "react"
import styled from "styled-components"
import { device } from "@/styles/breakpoints"
import { Link } from "react-router-dom"
import { Btn } from "@/components/btns/_index"
import { iSun } from "@/components/icons/Icons"

const Nav: FC = (): JSX.Element => {
  return (
    <NavStyled>
      <Content>
        <Link to="/">
          <h1>ckBTC</h1>
        </Link>

        <div className="actions">
          <span className="theme">{iSun}</span>
          <Btn $type={"primary"} $text={"Sign In"} onClick={() => {}} />
        </div>
      </Content>
      <hr />
    </NavStyled>
  )
}

const NavStyled = styled.header`
  /* background-color: var(--background);
  position: sticky;
  top: 0; */

  > hr {
    border: none;
    height: 1px;
    background-color: var(--underlay2);
    width: 100%;
  }
`

const Content = styled.div`
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > a {
    > h1 {
      font-size: var(--fs4);
      font-weight: var(--fwBold);
      color: var(--secondaryColor);
    }
  }

  > div.actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > span.theme {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
      flex-shrink: 0;
      color: var(--secondaryColor);
      transition: var(--transition1);
      cursor: pointer;

      &:hover {
        color: unset;
        background-color: var(--underlay1);
      }
    }
  }

  @media ${device.laptop} {
    padding: 1rem;
  }
`

export default Nav
