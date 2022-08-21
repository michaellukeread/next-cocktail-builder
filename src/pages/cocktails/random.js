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
    <Layout className="flex items-center flex-col gap-8">
      <ProgressiveSearch />
      <section className="w-full">
        <CocktailProfile isFetching={isFetching} {...data} />
      </section>

      <Button onClick={refetch} className="inline-flex items-center gap-4">
        Randomise Cocktail
        <SparklesIcon className="w-5 h-5" />
      </Button>
    </Layout>
  )
}

export default Random
