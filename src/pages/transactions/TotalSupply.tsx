import { FC } from "react"
import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"
import { E8S } from "@/constants/_index"
import { Btn } from "@/components/btns/_index"

// state
import { useAppSelector } from "@/hooks/useRedux"
import { selectTotalSupply } from "@/state/totalSupply"

const TotalSupply: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const totalSupply = useAppSelector(selectTotalSupply)
  const symbol = "ckBTC"

  const toMint = (): void => {
    navigate("/mint")
  }

  return (
    <TotalSupplyStyled className="wrapper">
      <div className="title">
        <h2 className="pageTitle" style={{ margin: "unset" }}>
          Total Supply{" "}
        </h2>
        <Btn $type={"primary"} $text={"Mint"} onClick={toMint} />
      </div>

      <div className="stats">
        <div>
          <p>
            {(+totalSupply / E8S).toFixed(4)} {symbol}
          </p>
        </div>
      </div>
    </TotalSupplyStyled>
  )
}

const TotalSupplyStyled = styled.div`
  margin-bottom: 1rem;

  > div.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`

export default TotalSupply
