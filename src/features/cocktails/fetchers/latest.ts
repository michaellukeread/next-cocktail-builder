import { LATEST_API } from "../config"

export const fetcher = async () => {
  const response = await fetch(LATEST_API)

  const data = await response.json()
  return data.drinks
}