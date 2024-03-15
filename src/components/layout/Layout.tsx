import { FC } from "react"
import { styled } from "styled-components"
import "./Layout.css"
import { Nav, Navlinks, Footer } from "./_index"
import { Outlet } from "react-router-dom"
import { device } from "@/styles/breakpoints"
import { Toaster } from "react-hot-toast"

const Layout: FC = (): JSX.Element => {
  const theme = "light"

  return (
    <LayoutStyled className={`${theme} App`}>
      <Toaster position={"bottom-center"} toastOptions={{ duration: 5000 }} />

      <Nav />
      <Navlinks />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  color: var(--primaryColor);
  background-color: var(--background);
  display: flex;
  flex-direction: column;

  /* footer at the bottom */
  min-height: 100vh;

  /* root font */

  > main.main {
    padding: 2rem 2rem;
    max-width: calc(2048px + 4rem);
    margin: 0 auto;
    width: 100%;

    /* footer at the bottom */
    flex-grow: 1;

    @media ${device.laptop} {
      padding: 1rem;
    }
  }
`

export default Layout
