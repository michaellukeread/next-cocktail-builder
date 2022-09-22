import { useQuery } from "@tanstack/react-query"

import { fetchRandomSelection } from "../fetchers"
import { RANDOM_SELECTION_KEY } from "../config"

export const useRandomSelection = () => useQuery([RANDOM_SELECTION_KEY], fetchRandomSelection, {
  placeholderData: []
})
