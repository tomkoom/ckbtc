import { FC } from "react"
import styled from "styled-components"
import { Btn } from "@/components/btns/_index"

const Wallet: FC = (): JSX.Element => {
  return (
    <WalletStyled>
      <h2 className="pageTitle">Wallet</h2>

      <div className="content">
        <div className="id">
          <span className="label">Principal Id</span>
          <span className="value">123</span>
        </div>

        <div className="id">
          <span className="label">Account Id</span>
          <span className="value">123</span>
        </div>

        <div className="id">
          <span className="label">Balance</span>
          <span className="value">123.45 ckBTC</span>
        </div>

        <div className="actions">
          <Btn style={{ width: "100%" }} $type={"primary"} $text={"Update Balance"} />
          <Btn style={{ width: "100%" }} $type={"secondary"} $text={"Withdraw"} />
        </div>
      </div>
    </WalletStyled>
  )
}

const WalletStyled = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 2rem;
  box-shadow: var(--shadow1);
  border-radius: 0.5rem;

  > div.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div.id {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > span.value {
        padding: 1rem;
        background-color: var(--underlay1);
      }
    }

    > div.actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`

export default Wallet
