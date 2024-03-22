import { FC, useState } from "react"
import { styled } from "styled-components"
import { Tabs, MintPanel, UnmintPanel, Wallet } from "./_index"

const Mint: FC = (): JSX.Element => {
  const [tab, setTab] = useState<string>("mint")

  return (
    <MintStyled>
      <Wallet />

      <MintWrapper>
        <h2 className="pageTitle">Mint</h2>
        <Tabs tab={tab} setTab={setTab} />

        <div className="content">
          <p>
            The ckBTC Minter canister converts BTC to ckBTC and back. It works with a{" "}
            <a
              href="https://github.com/dfinity/ic/blob/master/rs/rosetta-api/icrc1/README.md"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ledger Canister
            </a>
            , handling the ckBTC token transfers, and a{" "}
            <a href="https://github.com/dfinity/bitcoin-canister">Bitcoin Canister</a>, interfacing with the Bitcoin
            network. The{" "}
            <a
              href="https://dashboard.internetcomputer.org/canister/mqygn-kiaaa-aaaar-qaadq-cai"
              target="_blank"
              rel="noreferrer noopener"
            >
              ckBTC Minter canister
            </a>{" "}
            is a minter for the ckBTC Ledger canister: it can mint and burn ckBTC tokens.
          </p>

          {tab === "mint" ? <MintPanel /> : tab === "unmint" ? <UnmintPanel /> : null}
        </div>
      </MintWrapper>
    </MintStyled>
  )
}

const MintStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`

const MintWrapper = styled.div`
  max-width: 960px;

  padding: 2rem;
  box-shadow: var(--shadow1);
  border-radius: 0.5rem;

  > div.content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;

    > p {
      color: var(--secondaryColor);

      > a {
        color: var(--secondaryColor);
        text-decoration: underline;
        transition: var(--transition1);

        &:hover {
          color: var(--primaryColor);
        }
      }
    }
  }
`

export default Mint
