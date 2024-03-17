import { FC, ReactNode, ButtonHTMLAttributes } from "react"
import styled from "styled-components"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $type: "primary" | "secondary"
  $text: string
  $icon?: ReactNode
}

const Btn: FC<BtnProps> = ({ $type, $text, $icon, ...props }): JSX.Element => {
  return (
    <BtnStyled $type={$type} {...props}>
      {$icon && <span className="icon">{$icon}</span>}
      {$text}
    </BtnStyled>
  )
}

const colors = {
  primary: "#fff",
  secondary: "var(--primaryColor)",
}

const bgColors = {
  primary: "var(--highlight2)",
  secondary: "var(--underlay1)",
}

const hoverBgColors = {
  primary: "var(--highlight3)",
  secondary: "var(--underlay2)",
}

const BtnStyled = styled.button<{ $type: "primary" | "secondary" }>`
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 0.5rem;
  padding: 0 1rem;
  font-size: var(--fsText);
  font-weight: var(--fwBold);
  /* border-radius: 1.375rem; */
  transition: var(--transition1);

  /* disabled */

  opacity: ${(p) => (p.disabled ? "0.5" : null)};

  /* custom */

  color: ${(p) => colors[p.$type]};
  background-color: ${(p) => bgColors[p.$type]};

  &:hover {
    background-color: ${(p) => hoverBgColors[p.$type]};
  }

  > span.icon {
    width: 1rem;
    height: 1rem;
    display: grid;
    place-items: center;
    opacity: 80%;
  }
`

export default Btn
