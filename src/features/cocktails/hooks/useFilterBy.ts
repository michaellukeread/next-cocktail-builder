import { useQuery } from "@tanstack/react-query"

import { fetchFilterBy } from "../fetchers"
import { FILTER_BY_KEY } from "../config"

type Filter = 'ingredient' | 'alcoholic' | 'category' | 'glass'
enum FilterMap {
  ingredient = 'i',
  alcoholic = 'a',
  category = 'c',
  glass = 'g'
}

export const useFilterBy = (filter: Filter, item: string) => useQuery([FILTER_BY_KEY, filter, item], () => fetchFilterBy(FilterMap[filter], item), {
  placeholderData: []
})
