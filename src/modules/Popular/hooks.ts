import { useQuery } from "@tanstack/react-query"
import { fetcher } from "./fetcher"
import { KEY } from "./config"

export const usePopular = () => useQuery([KEY], fetcher, {
  placeholderData: []
})
