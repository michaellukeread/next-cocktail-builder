import { useQuery } from "@tanstack/react-query"

import { KEY } from "./config"
import { fetcher } from "./fetcher"

export const useLatest = () => useQuery([KEY], fetcher, {
  placeholderData: []
})