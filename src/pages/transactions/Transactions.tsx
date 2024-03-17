import { FC } from "react"
import { styled } from "styled-components"
import { E8S } from "@/constants/_index"
import { formatDateTime, capitalizeFirstLetter, trimZeroes, formatId } from "@/utils/_index"

// components
import { iExternalLink } from "@/components/icons/Icons"
import { Pagination, TotalSupply } from "./_index"

// state
import { useAppSelector } from "@/hooks/useRedux"
import { selectTransactionsData } from "@/state/transactions"

const Transactions: FC = (): JSX.Element => {
  const txs = useAppSelector(selectTransactionsData)
  const symbol = "ckBTC"

  return (
    <TransactionStyled>
      <TotalSupply />

      <div className="transactions wrapper">
        <h2 className="pageTitle">Transactions</h2>

        <Pagination />

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
                <span>
                  {trimZeroes((+tx.amount / E8S).toFixed(8))} {symbol}
                </span>
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

        <Pagination />
      </div>
    </TransactionStyled>
  )
}

const TransactionStyled = styled.div`
  font-size: var(--fs7);

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
      > li:nth-child(2n + 1) {
        background-color: var(--underlay1);
      }

      > li {
        > a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 1rem;
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
              padding: 0 0.4rem;
            }
          }
        }
      }
    }
  }
`

export default Transactions
