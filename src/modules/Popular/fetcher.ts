import { REQUEST_URL } from './config'

export const fetcher = async () => {
  const response = await fetch(REQUEST_URL)

  const data = await response.json()
  return data.drinks
}