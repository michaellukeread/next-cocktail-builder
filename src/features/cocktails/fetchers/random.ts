import { RANDOM_API } from "../config"

export const fetcher = async () => {
  const response = await fetch(RANDOM_API)

  const data = await response.json()
  return data.drinks
}