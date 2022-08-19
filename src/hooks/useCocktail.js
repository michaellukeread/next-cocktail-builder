import { useQuery } from "@tanstack/react-query"

import { cocktailFetcher } from "fetchers"

const useCocktail = (queryName, path) => {
  return useQuery([queryName], () => cocktailFetcher(path))
}

export default useCocktail
