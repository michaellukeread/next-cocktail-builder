import { useQuery } from "@tanstack/react-query"

import { Navbar, Layout, CocktailProfile, ProgressiveSearch } from "components"

const fetcher = async (name) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  )
  const data = await response.json()
  return data.drinks[0]
}

const Cocktails = ({ query }) => {
  const { isLoading, isFetching, error, data } = useQuery(
    ["name", query.name],
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
    <>
      <Navbar />
      <Layout className="flex items-center flex-col gap-8">
        <ProgressiveSearch />
        <section className="w-full">
          <CocktailProfile isFetching={isFetching} {...data} />
        </section>
      </Layout>
    </>
  )
}

Cocktails.getInitialProps = async ({ query }) => ({ query })

export default Cocktails
