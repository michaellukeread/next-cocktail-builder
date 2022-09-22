import { LIST_BY_API } from "../config"

type Filter = 'i' | 'a' | 'c' | 'g'

export const fetcher = async (filter: Filter) => {
  const response = await fetch(
    `${LIST_BY_API}?${filter}=list`
  )
  
  const data = await response.json()
  return data.drinks
}