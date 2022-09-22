import { useQuery } from "@tanstack/react-query"

import { fetchCocktailById } from "../fetchers"
import { COCKTAIL_BY_ID_KEY } from "../config"

export const useCocktailById = (id: string) => useQuery([COCKTAIL_BY_ID_KEY, id], () => fetchCocktailById(id))
