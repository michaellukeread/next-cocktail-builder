import Basic from "./Basic"
import List from "./List"
import WithImage from "./WithImage"

const VARIANTS = {
  basic: Basic,
  list: List,
  withImage: WithImage,
}

const Card = ({ variant, ...props }) => {
  const Component = VARIANTS[variant] || VARIANTS.progressBar

  return <Component {...props} />
}

export default Card
