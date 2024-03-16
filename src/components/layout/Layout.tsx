import { FC, useEffect } from "react"
import { styled } from "styled-components"
import "./Layout.css"
import { Nav, Navlinks, Footer } from "./_index"
import { Outlet } from "react-router-dom"
import { device } from "@/styles/breakpoints"
import { Toaster } from "react-hot-toast"
import { CKBTC_LEDGER_CANISTER } from "@/constants/_index"

// state
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux"
import {
  selectTransactionsPagination,
  setTransactionsPaginationTotalItems,
  setTransactionsData,
} from "@/state/transactions"

const Layout: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = "light"
  const pagination = useAppSelector(selectTransactionsPagination)
  const itemsPerPage = pagination.itemsPerPage
  const offset = pagination.itemOffset

  const getTxs = async (offset: number): Promise<void> => {
    try {
      const response = await fetch(
        `https://icrc-api.internetcomputer.org/api/v1/ledgers/${CKBTC_LEDGER_CANISTER}/transactions?offset=${offset.toString()}&limit=${itemsPerPage}&sort_by=-index`,
      )
      console.log("fetch")
      const data = await response.json()
      dispatch(setTransactionsPaginationTotalItems(data.total_transactions))
      dispatch(setTransactionsData(data.data))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getTxs(offset)
  }, [offset])

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
    padding: 4rem 2rem;
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
