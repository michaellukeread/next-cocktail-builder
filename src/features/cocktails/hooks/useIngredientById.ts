import { useQuery } from "@tanstack/react-query"

import { fetchIngredientById } from "../fetchers"
import { INGREDIENT_BY_ID_KEY } from "../config"

export const useIngredientById = (id: string) => useQuery([INGREDIENT_BY_ID_KEY, id], () => fetchIngredientById(id))
