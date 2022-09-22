import { useQuery } from "@tanstack/react-query"

import { fetchPopular } from "../fetchers"
import { POPULAR_KEY } from "../config"

export const usePopular = () => useQuery([POPULAR_KEY], fetchPopular, {
  placeholderData: []
})
