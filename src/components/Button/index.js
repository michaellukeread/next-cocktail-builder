import PureButton from "./Button"

const Button = ({ children, ...props }) => (
  <PureButton {...props}>{children}</PureButton>
)

export default Button
