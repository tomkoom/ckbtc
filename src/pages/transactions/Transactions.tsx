import { FC, useState, useEffect } from "react"
import { styled } from "styled-components"
import { CKBTC_LEDGER_CANISTER, E8S } from "@/constants/_index"
import { formatDateTime } from "@/utils/formatDateTime"
import { formatId } from "@/utils/formatId"
import { iExternalLink } from "@/components/icons/Icons"

interface Transaction {
  index: number
  amount: string
  kind: string
  timestamp: string
  from_owner: string
  to_owner: string
}

const Transactions: FC = (): JSX.Element => {
  const [txs, setTxs] = useState<Transaction[]>([])

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const getTxs = async (): Promise<void> => {
    const response = await fetch(
      `https://icrc-api.internetcomputer.org/api/v1/ledgers/${CKBTC_LEDGER_CANISTER}/transactions?offset=0&limit=20&sort_by=-index`,
    )
    const data = await response.json()
    console.log(data.data)
    setTxs(data.data)
  }

  useEffect(() => {
    getTxs()
  }, [])

  return (
    <TransactionStyled className="wrapper">
      <h2 className="pageTitle">ckBTC Transactions</h2>

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
              <span>{tx.index.toString()}</span>
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
    </TransactionStyled>
  )
}

const TransactionStyled = styled.div`
  font-size: var(--fs7);
  font-weight: var(--fwMedium);

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
            background-color: var(--tertiaryColor);
            padding: 0 0.5rem;
            border-radius: 0.75rem;
          }
        }
      }
    }
  }
`

export default Transactions
