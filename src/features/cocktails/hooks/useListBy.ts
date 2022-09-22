import { useQuery } from "@tanstack/react-query"

import { fetchListBy } from "../fetchers"
import { LIST_BY_KEY } from "../config"

type Filter = 'ingredient' | 'alcoholic' | 'category' | 'glass'
enum FilterMap {
  ingredient = 'i',
  alcoholic = 'a',
  category = 'c',
  glass = 'g'
}

export const useListBy = (filter: Filter) => useQuery([LIST_BY_KEY, filter], () => fetchListBy(FilterMap[filter]), {
  placeholderData: []
})
