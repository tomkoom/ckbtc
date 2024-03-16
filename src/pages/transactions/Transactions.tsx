import { FC, useState, useEffect } from "react"
import { styled } from "styled-components"
import { CKBTC_LEDGER_CANISTER, E8S } from "@/constants/_index"
import { formatDateTime } from "@/utils/formatDateTime"
import { formatId } from "@/utils/formatId"
import { iExternalLink } from "@/components/icons/Icons"
import { Btn } from "@/components/btns/_index"
import { useNavigate } from "react-router-dom"

interface Transaction {
  index: number
  amount: string
  kind: string
  timestamp: string
  from_owner: string
  to_owner: string
}

const Transactions: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const [txs, setTxs] = useState<Transaction[]>([])
  const [totalSupply, setTotalSupply] = useState<string>("")
  const symbol = "ckBTC"

  const toMint = (): void => {
    navigate("/mint")
  }

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const getTxs = async (): Promise<void> => {
    try {
      const response = await fetch(
        `https://icrc-api.internetcomputer.org/api/v1/ledgers/${CKBTC_LEDGER_CANISTER}/transactions?offset=0&limit=20&sort_by=-index`,
      )
      const data = await response.json()
      setTxs(data.data)
    } catch (e) {
      console.log(e)
    }
  }

  const getTotalSupply = async (): Promise<void> => {
    const response = await fetch(
      `https://icrc-api.internetcomputer.org/api/v1/ledgers/${CKBTC_LEDGER_CANISTER}/total-supply`,
    )
    const data = await response.json()
    setTotalSupply(data.data[0][1])
  }

  useEffect(() => {
    ;(async () => getTxs())()
    ;(async () => getTotalSupply())()
  }, [])

  return (
    <TransactionStyled>
      <div className="total_supply wrapper">
        <div className="title">
          <h2 className="pageTitle" style={{ margin: "unset" }}>
            Total Supply{" "}
          </h2>
          <Btn $type={"primary"} $text={"Mint"} onClick={toMint} />
        </div>

        <p>
          {(+totalSupply / E8S).toFixed(4)} {symbol}
        </p>
      </div>

      <div className="transactions wrapper">
        <h2 className="pageTitle">Transactions</h2>

        <div className="header">
          <span>Tx Index</span>
          <span>Amount</span>
          <span>Type</span>
          <span>Timestamp</span>
          <span>From</span>
          <span>To</span>
          <span className="icon"></span>
        </div>

        <ul>
          {txs.map((tx, i) => (
            <li key={i}>
              <a
                href={`https://dashboard.internetcomputer.org/bitcoin/transaction/${tx.index}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="index">{tx.index.toString()}</span>
                <span>{(+tx.amount / E8S).toString()} ckBTC</span>
                <span className="type">
                  <span>{capitalizeFirstLetter(tx.kind)}</span>
                </span>
                <span>{formatDateTime(+tx.timestamp / 1_000_000)}</span>
                <span>{tx.from_owner ? formatId(tx.from_owner) : "..."}</span>
                <span>{tx.to_owner ? formatId(tx.to_owner) : "..."}</span>
                <span className="icon">{iExternalLink}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </TransactionStyled>
  )
}

const TransactionStyled = styled.div`
  font-size: var(--fs7);
  font-weight: var(--fwMedium);

  > div.total_supply {
    margin-bottom: 1rem;

    > div.title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  }

  > div.transactions {
    > div.header {
      display: flex;
      align-items: center;
      padding: 1rem;

      > span {
        color: var(--secondaryColor);
        flex: 1;
      }

      > span.icon {
        flex: 0.1;
      }
    }

    > ul {
      > li {
        &:nth-child(2n + 1) {
          background-color: var(--underlay1);
        }

        > a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 1rem;
          margin-bottom: 0.125rem;
          transition: var(--transition1);

          > span {
            color: var(--secondaryColor);
            flex: 1;
          }

          > span.index {
            color: var(--primaryColor);
          }

          > span.icon {
            flex: 0.1;
            color: var(--tertiaryColor);
          }

          > span.type {
            display: flex;

            > span {
              height: 1.5rem;
              display: flex;
              align-items: center;
              align-self: flex-start;
              font-size: 0.7rem;
              font-weight: var(--fwBold);
              color: var(--background);
              background-color: var(--secondaryColor);
              padding: 0 0.5rem;
              /* border-radius: 0.75rem; */
            }
          }
        }
      }
    }
  }
`

export default Transactions
