import { useQuery } from "@tanstack/react-query"

import { CocktailProfile, Spinner, Layout } from "components"
import { API_SERVER } from "config"

const QUERY_KEY = "Random"

const fetcher = async () => {
  const response = await fetch(
    `${API_SERVER}${process.env.NEXT_PUBLIC_API_KEY}/random.php`
  )
  const data = await response.json()
  return data.drinks[0]
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

  if (isLoading)
    return (
      <Layout className="mt-8 flex items-center justify-center flex-col gap-8">
        <Spinner />
      </Layout>
    )
  if (error) return <div>error...</div>

  return (
    <section className="h-[calc(100vh-8.25rem)]">
      <CocktailProfile isFetching={isFetching} onClick={refetch} {...data} />
    </section>
  )
}

export default Random
