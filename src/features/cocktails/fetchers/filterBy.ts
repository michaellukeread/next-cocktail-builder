import { FILTER_BY_API } from "../config"

type Filter = 'i' | 'a' | 'c' | 'g'

export const fetcher = async (filter: Filter, item: string) => {
  const response = await fetch(
    `${FILTER_BY_API}?${filter}=${item}`
  )
  
  const data = await response.json()
  return data.drinks
}