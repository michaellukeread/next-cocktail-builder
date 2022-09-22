import { COCKTAIL_BY_ID_API } from "../config"

export const fetcher = async (id: string) => {
  const response = await fetch(
    `${COCKTAIL_BY_ID_API}?i=${id}`
  )
  
  const data = await response.json()
  return data.drinks[0]
}