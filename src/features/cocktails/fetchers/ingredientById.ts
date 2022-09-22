import { INGREDIENT_BY_ID_API } from "../config"

export const fetcher = async (id: string) => {
  const response = await fetch(
    `${INGREDIENT_BY_ID_API}?iid=${id}`
  )
  
  const data = await response.json()
  return data
}