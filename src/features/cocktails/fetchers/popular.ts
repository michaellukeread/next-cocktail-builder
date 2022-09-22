import { POPULAR_API } from "../config"

export const fetcher = async () => {
  const response = await fetch(POPULAR_API)

  const data = await response.json()
  return data.drinks
}