import { RANDOM_SELECTION_API } from "../config"

export const fetcher = async () => {
  const response = await fetch(RANDOM_SELECTION_API)

  const data = await response.json()
  return data.drinks
}