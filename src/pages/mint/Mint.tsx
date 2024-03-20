import { FC, useState } from "react"
import { styled } from "styled-components"
import { Tabs, MintPanel, UnmintPanel } from "./_index"

const Mint: FC = (): JSX.Element => {
  const [tab, setTab] = useState<string>("mint")

  return (
    <MintStyled className="wrapper1280">
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
    </MintStyled>
  )
}

const MintStyled = styled.div`
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
