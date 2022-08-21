import { useQuery } from "@tanstack/react-query"
import { SparklesIcon } from "@heroicons/react/solid"

import { ProgressiveSearch, Layout, Button, CocktailProfile } from "components"

const QUERY_KEY = "Random"

const fetcher = async () => {
  const result = await (
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  ).json()
  return result.drinks[0]
}

const Random = () => {
  const { isLoading, isFetching, error, data, refetch } = useQuery(
    [QUERY_KEY],
    fetcher,
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>error...</div>

  return (
    <section className="h-[calc(100vh-8.25rem)]">
      <CocktailProfile isFetching={isFetching} onClick={refetch} {...data} />
    </section>
  )
}

export default Random
