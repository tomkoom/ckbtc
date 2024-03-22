import { FC } from "react"
import { styled } from "styled-components"
import { Btn } from "@/components/btns/_index"
import { iCopy } from "@/components/icons/Icons"
import { notifySuccess } from "@/utils/notify"
import { CopyToClipboard } from "react-copy-to-clipboard"

const MintPanel: FC = (): JSX.Element => {
  const btcAddress = "123"
  const symbol = "ckBTC"
  const amount = ""

  const copyBtcAddress = () => {
    notifySuccess("BTC address copied")
  }

  return (
    <MintPanelStyled>
      <h3 className="sectionTitle">To mint ckBTC:</h3>

      <ul>
        <li>
          <span className="step">1.</span>

          <div>
            <div className="label">
              <p>Send Bitcoin to the BTC address below</p>
            </div>

            <div className="value">
              <span>
                {btcAddress}
                <CopyToClipboard text={btcAddress} onCopy={copyBtcAddress}>
                  <span className="icon">{iCopy}</span>
                </CopyToClipboard>
              </span>
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
                <strong>up to 72 confirmations, corresponding to a 12-hour waiting period on average</strong>
              </p>
            </div>
          </div>
        </li>

        <li>
          <span className="step">3.</span>

          <div>
            <div className="label">
              <p>
                Notify ckBTC Minter canister about the transfer on the <strong>Wallet</strong> panel by{" "}
                <strong>updating your balance</strong>
              </p>
            </div>

            {/* <div className="value">
              <span>{"0.00" + " " + symbol}</span>
              <Btn style={{ width: "100%" }} $type={"primary"} $text={"Update Balance"} onClick={() => {}} />
            </div> */}
          </div>
        </li>

        <li className="hint">
          <p>
            Enjoy the ckBTC superpowers such as Internet Computer speed and low fees after your balance has been
            topped-up!
          </p>
          {/* <p>You now have some ckBTC! Enjoy the ckBTC superpowers such as Internet Computer speed and low fees!</p> */}
          {/* <Btn $type={"secondary"} $text={"Manage your assets from the profile page"} /> */}
        </li>
      </ul>
    </MintPanelStyled>
  )
}

const MintPanelStyled = styled.div`
  > h3 {
    margin-bottom: 2rem;
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > li.hint {
      text-align: center;
      box-shadow: var(--boxShadow2);
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

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
        width: 100%;

        > div.label {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        > div.value {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;

          > span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            /* ... */
            padding: 1rem;
            color: var(--primaryColor);
            background-color: var(--underlay1);
            font-size: var(--fs6);
            font-weight: var(--fwMedium);
            text-align: center;
            width: 100%;

            > span.icon {
              width: 2.5rem;
              height: 2.5rem;
              display: grid;
              place-items: center;
              color: var(--secondaryColor);
              background-color: var(--underlay2);
              cursor: pointer;
              transition: var(--transition1);

              &:hover {
                color: var(--primaryColor);
                background-color: var(--underlay3);
              }
            }
          }
        }
      }
    }
  }
`

export default MintPanel
