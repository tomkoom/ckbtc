import { FC, Dispatch, SetStateAction } from "react"
import { styled } from "styled-components"
import { iArrowRight } from "@/components/icons/Icons"

interface TabsProps {
  tab: string
  setTab: Dispatch<SetStateAction<string>>
}

const Tabs: FC<TabsProps> = ({ tab, setTab }): JSX.Element => {
  const changeTab = (value: string) => {
    setTab(value)
  }

  return (
    <TabsStyled>
      <button className={tab === "mint" ? "active" : undefined} onClick={() => changeTab("mint")}>
        <span className="title">Mint</span>
        <span className="hint">Bitcoin {iArrowRight} ckBTC</span>
      </button>

      <button className={tab === "unmint" ? "active" : undefined} onClick={() => changeTab("unmint")}>
        <span className="title">Unmint</span>
        <span className="hint">ckBTC {iArrowRight} Bitcoin</span>
      </button>
    </TabsStyled>
  )
}
const TabsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: var(--underlay1);
  padding: 0.25rem;
  box-shadow: var(--boxShadow2);

  > button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    color: var(--secondaryColor);
    padding: 0.75rem;
    transition: var(--transition1);

    &:hover {
      background-color: var(--underlay3);
    }

    &.active {
      color: var(--primaryColor);
      background-color: var(--underlay2);

      &:hover {
        background-color: var(--underlay3);
      }
    }

    > span.title {
      font-weight: var(--fwBold);
    }

    > span.hint {
      font-size: var(--fsText);
      font-weight: var(--fwRegular);
    }
  }
`

export default Tabs
