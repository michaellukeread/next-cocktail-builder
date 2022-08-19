import { summarise } from "utils"

const fetcher = async (path) => {
  const result = await (await fetch(`/api/cocktail/${path}`)).json()
  return summarise(result.data.drinks[0])
}

export default fetcher
