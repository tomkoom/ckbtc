import { FC } from "react"
import { device } from "@/styles/breakpoints"
import { styled } from "styled-components"
import { Meta, Navlinks } from "./_index"

const Footer: FC = (): JSX.Element => {
  return (
    <FooterStyled>
      <div>
        <Meta />
      </div>

      <div>
        <Navlinks />
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  /* ... */
  padding: 3rem 2rem;
  margin-top: 1rem;
  background-color: var(--underlay1);

  @media ${device.laptop} {
    padding: 3rem 1rem;
  }

  > div {
    flex: 1;
  }
`

export default Footer
