import { FC } from "react"
import { styled } from "styled-components"

const MintPanel: FC = (): JSX.Element => {
  return (
    <MintPanelStyled>
      <ul>
        <li>
          <span className="step">1.</span>

          <div>
            <div className="label">
              <p>Send Bitcoin to the BTC address below</p>
            </div>

            <div className="value">
              <span>btc address</span>
            </div>
          </div>
        </li>

        <li>
          <span className="step">2.</span>

          <div>
            <div className="label">
              <p>
                Wait until your Bitcoin transaction gets enough confirmations. Note that for security reasons ckBTC
                mainnet can require{" "}
                <span>up to 72 confirmations, corresponding to a 12-hour waiting period on average</span>
              </p>
            </div>
          </div>
        </li>

        <li>
          <span className="step">3.</span>

          <div>
            <div className="label">
              <p>Notify ckBTC Minter canister about the transfer (refresh your balance)</p>
            </div>
          </div>
        </li>
      </ul>
    </MintPanelStyled>
  )
}

const MintPanelStyled = styled.div`
  > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > li {
      display: flex;
      align-items: center;
      gap: 1rem;

      > span.step {
        width: 2.5rem;
        height: 2.5rem;
        display: grid;
        place-items: center;
        flex-shrink: 0;
        font-weight: var(--fwBold);
        color: #fff;
        background-color: var(--highlight1);
        border-radius: 50%;
      }

      > div {
        > div.label {
          display: flex;
          align-items: center;
          gap: 1rem;

          > p {
            > span {
              background-color: var(--underlay2);
              padding: 0.125rem;
            }
          }
        }
      }
    }
  }
`

export default MintPanel
