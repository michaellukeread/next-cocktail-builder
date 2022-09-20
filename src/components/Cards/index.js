import Basic from "./Basic"
import List from "./List"
import WithImage from "./WithImage"
import Overview from "./Overview"
import Square from "./Square"
import Featured from "./Featured"

const VARIANTS = {
  basic: Basic,
  list: List,
  withImage: WithImage,
  overview: Overview,
  square: Square,
}

const Card = ({ variant, ...props }) => {
  const Component = VARIANTS[variant] || VARIANTS.basic

  return <Component {...props} />
}

export { Square as SquareCard }
export { Featured as FeaturedCard }
export { Overview as OverviewCard }

export default Card
