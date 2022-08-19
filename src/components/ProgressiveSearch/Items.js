import { memo } from "react"

import Item from "./Item"

const Items = ({ items }) =>
  items.map((item) => <Item key={item.idDrink} item={item} />)

export default memo(Items)
