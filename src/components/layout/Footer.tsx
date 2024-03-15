import { FC } from "react"
import { device } from "@/styles/breakpoints"
import styled from "styled-components"

const Footer: FC = (): JSX.Element => {
  return <FooterStyled>footer</FooterStyled>
}

const FooterStyled = styled.footer`
  width: 100%;
  padding: 3rem 2rem;
  margin-top: 1rem;
  background-color: var(--underlay1);

  @media ${device.laptop} {
    padding: 3rem 1rem;
  }
`

export default Footer
