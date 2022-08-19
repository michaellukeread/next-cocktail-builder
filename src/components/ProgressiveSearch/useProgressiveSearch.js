import { useState, useCallback } from "react"
import { useRouter } from "next/router"

import { useQuery } from "@tanstack/react-query"

const fetcher = async (name) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  )
  const data = await response.json()
  return data.drinks
}

const useProgressiveSearch = () => {
  const router = useRouter()

  const [selected, setSelected] = useState({})
  const [query, setQuery] = useState("")
  const [items, setItems] = useState([])

  const updateItems = useCallback((data) => setItems(data), [])
  const displayValue = useCallback((items) => items.strDrink, [])
  const afterLeave = useCallback(() => setQuery(""), [])
  const onChange = useCallback((event) => setQuery(event.target.value), [])
  const onClick = useCallback(
    () => router.push(`/cocktails?name=${selected.strDrink}`),
    [router, selected.strDrink]
  )

  const { isLoading, error } = useQuery(
    ["search", query],
    () => fetcher(query),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      onSuccess: updateItems,
    }
  )

  return {
    items,
    isLoading,
    error,
    selected,
    setSelected,
    displayValue,
    afterLeave,
    onChange,
    onClick,
  }
}

export { useProgressiveSearch }
