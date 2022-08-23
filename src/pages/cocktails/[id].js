import { useQuery } from "@tanstack/react-query"

import { Layout, CocktailProfile, ProgressiveSearch } from "components"
import { API_SERVER } from "config"

const QUERY_KEY = "id"

const fetcher = async (id) => {
  const response = await fetch(
    `${API_SERVER}${process.env.NEXT_PUBLIC_API_KEY}/lookup.php?i=${id}`
  )
  const data = await response.json()
  return data.drinks[0]
}

const Id = ({ query }) => {
  const { isLoading, isFetching, error, data } = useQuery(
    [QUERY_KEY, query.id],
    () => fetcher(query.id),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>error...{error}</div>

  return (
    <section className="h-[calc(100vh-8.25rem)]">
      <CocktailProfile isFetching={isFetching} {...data} />
    </section>
  )
}

Id.getInitialProps = async ({ query }) => ({ query })

export default Id
