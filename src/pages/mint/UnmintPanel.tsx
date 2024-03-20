import { FC } from "react"
import { styled } from "styled-components"

const UnmintPanel: FC = (): JSX.Element => {
  return (
    <UnmintPanelStyled>
      <h3 className="sectionTitle">To unmint ckBTC:</h3>
    </UnmintPanelStyled>
  )
}

const UnmintPanelStyled = styled.div`
  > h3 {
    margin-bottom: 2rem;
  }
`

export default UnmintPanel
