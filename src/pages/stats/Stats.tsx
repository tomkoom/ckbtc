import { FC } from "react"
import { styled } from "styled-components"

const Stats: FC = (): JSX.Element => {
  return (
    <StatsStyled className="wrapper">
      <h2 className="pageTitle">Stats</h2>
    </StatsStyled>
  )
}

const StatsStyled = styled.div``

export default Stats
