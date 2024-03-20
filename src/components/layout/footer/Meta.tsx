import { FC } from "react"
import { device } from "@/styles/breakpoints"
import { styled } from "styled-components"
import { IC_LOGO, FRONTEND_CANISTER, PROJECT_NAME } from "@/constants/_index"

const Meta: FC = (): JSX.Element => {
  const year = new Date().getFullYear()

  return (
    <MetaStyled>
      <span className="badge">
        Powered by{" "}
        <a href="https://internetcomputer.org/" target="_blank" rel="noreferrer noopener">
          <img src={IC_LOGO} alt="Internet Computer logo" />
          Internet Computer
        </a>
      </span>

      <span>
        On-chain:{" "}
        <a href="" target="_blank" rel="noreferrer noopener">
          {FRONTEND_CANISTER || "..."}
        </a>
      </span>

      <span>
        © {year.toString()} {PROJECT_NAME}
      </span>
    </MetaStyled>
  )
}

const MetaStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > span {
    font-size: var(--fsText);
    color: var(--secondaryColor);

    > a {
      color: var(--secondaryColor);
      text-decoration: underline;
      transition: var(--transition1);

      &:hover {
        color: var(--primaryColor);
      }
    }
  }

  > span.badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: var(--fsText);

    > a {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      > img {
        max-height: 1rem;
        max-width: 1rem;
        object-fit: contain;
      }
    }
  }
`

export default Meta
