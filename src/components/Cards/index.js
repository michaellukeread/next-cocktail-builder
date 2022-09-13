import Basic from "./Basic"
import List from "./List"
import WithImage from "./WithImage"
import Overview from "./Overview"

const VARIANTS = {
  basic: Basic,
  list: List,
  withImage: WithImage,
  overview: Overview,
}

const Card = ({ variant, ...props }) => {
  const Component = VARIANTS[variant] || VARIANTS.basic

  return <Component {...props} />
}

export default Card
