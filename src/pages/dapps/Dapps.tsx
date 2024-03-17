import { FC } from "react"
import { styled } from "styled-components"

const Dapps: FC = (): JSX.Element => {
  return (
    <DappsStyled className="wrapper">
      <h2 className="pageTitle">ckBTC dApps</h2>
    </DappsStyled>
  )
}

const DappsStyled = styled.div``

export default Dapps
