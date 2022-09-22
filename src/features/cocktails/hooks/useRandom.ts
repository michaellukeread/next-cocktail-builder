import { useQuery } from "@tanstack/react-query"

import { fetchRandom } from "../fetchers"
import { RANDOM_KEY } from "../config"

export const useRandom = () => useQuery([RANDOM_KEY], fetchRandom, {
  placeholderData: []
})
