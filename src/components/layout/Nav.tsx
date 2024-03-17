import { FC } from "react"
import styled from "styled-components"
import { device } from "@/styles/breakpoints"
import { Link } from "react-router-dom"
import { Btn } from "@/components/btns/_index"
import { iSun, iMoon, iRightToBracket } from "@/components/icons/Icons"

// state
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux"
import { selectTheme, setTheme } from "@/state/theme"

const Nav: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const changeTheme = (): void => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"))
  }

  return (
    <NavStyled>
      <Content>
        <Link to="/">
          <h1>ckBTC</h1>
        </Link>

        <div className="actions">
          <button className="theme" onClick={changeTheme}>
            {theme === "dark" ? iSun : iMoon}
          </button>
          <Btn $type={"primary"} $text={"Sign In"} $icon={iRightToBracket} onClick={() => {}} />
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

    > button.theme {
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
