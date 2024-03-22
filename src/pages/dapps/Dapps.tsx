import { FC } from "react"
import { styled } from "styled-components"

const Dapps: FC = (): JSX.Element => {
  const dapps = [
    { id: 123, name: "dapp1", description: "Lorem ipsum" },
    { id: 123, name: "dapp1", description: "Lorem ipsum" },
    { id: 123, name: "dapp1", description: "Lorem ipsum" },
    { id: 123, name: "dapp1", description: "Lorem ipsum" },
  ]

  return (
    <DappsStyled className="wrapper1280">
      <h2 className="pageTitle">ckBTC dApps</h2>

      <ul>
        {dapps.map((dapp, i) => (
          <li key={i}>
            <span className="logo">{dapp.name[0]}</span>
            <span>{dapp.name}</span>
            <span>{dapp.description}</span>
          </li>
        ))}
      </ul>
    </DappsStyled>
  )
}

const DappsStyled = styled.div`
  font-size: var(--fsText);

  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    > li {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 2rem;
      background-color: var(--underlay1);
      cursor: pointer;
      transition: var(--transition1);

      &:hover {
        background-color: var(--underlay2);
      }

      > span:not(.logo) {
        flex: 1;
      }

      > span.logo {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        flex-shrink: 0;
        font-weight: var(--fwBold);
        background-color: var(--underlay2);
        border-radius: 50%;
      }
    }
  }
`

export default Dapps
