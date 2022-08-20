import { useQuery } from "@tanstack/react-query"

import { summarise } from "utils"
import {
  Navbar,
  Layout,
  Card,
  Button,
  List,
  ProgressiveSearch,
} from "components"

const fetcher = async (name) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  )
  const data = await response.json()
  console.debug("data", data)
  return summarise(data.drinks[0])
}

const Cocktails = ({ query }) => {
  console.debug("query", query)
  const { isLoading, error, data, refetch } = useQuery(
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
      <Layout>
        <ProgressiveSearch />
        <section className="py-8 gap-8 w-full flex items-center justify-center flex-col">
          <Card image={data.image} title={data.name} summary={data.method[0]} />
          <Button onClick={refetch}>Refetch</Button>
          <List />
        </section>
      </Layout>
    </>
  )
}

Cocktails.getInitialProps = async ({ query }) => ({ query })

export default Cocktails
