import { useQuery } from "@tanstack/react-query"

import { fetchLatest } from "../fetchers"
import { LATEST_KEY } from "../config"

export const useLatest = () => useQuery([LATEST_KEY], fetchLatest, {
  placeholderData: []
})
