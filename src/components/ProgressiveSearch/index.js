import Loading from "./Loading"
import NothingFound from "./NothingFound"
import Error from "./Error"
import PureProgressiveSearch from "./ProgressiveSearch"

import { useProgressiveSearch } from "./useProgressiveSearch"

const ProgressiveSearch = () => {
  const { items, isLoading, error, ...rest } = useProgressiveSearch()

  let Component = null

  if (error) Component = Error
  if (isLoading) Component = Loading
  if (!items) Component = NothingFound

  return <PureProgressiveSearch items={items} {...rest} />
}

export default ProgressiveSearch
