import { FC, ReactNode } from "react"

import { classNames } from "utils"

type Variants = "primary" | "secondary" | "tertiary"
type Size = "small" | "default"

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  variant: Variants
  size?: Size
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  size = "default",
  disabled,
  ...props
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    {...props}
    type="button"
    className={classNames("btn", variant)}
  >
    {children}
  </button>
)

export default Button
