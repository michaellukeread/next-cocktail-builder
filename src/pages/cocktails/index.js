import { useQuery } from "@tanstack/react-query"

import { Layout, CocktailProfile, ProgressiveSearch } from "components"
import { API_SERVER } from "config"

const QUERY_KEY = "name"

const fetcher = async (name) => {
  const response = await fetch(
    `${API_SERVER}${process.env.NEXT_PUBLIC_API_KEY}/search.php?s=${name}`
  )
  const data = await response.json()
  return data.drinks[0]
}

const Cocktails = ({ query }) => {
  const { isLoading, isFetching, error, data } = useQuery(
    [QUERY_KEY, query.name],
    () => fetcher(query.name),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>error...{error}</div>

  return (
    <Layout className="mt-8 flex items-center flex-col gap-8">
      <ProgressiveSearch />
      <section className="w-full">
        <CocktailProfile isFetching={isFetching} {...data} />
      </section>
    </Layout>
  )
}

Cocktails.getInitialProps = async ({ query }) => ({ query })

export default Cocktails
