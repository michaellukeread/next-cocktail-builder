import { useQuery } from "@tanstack/react-query"

import { summarise } from "utils"
import { Navbar, Search, Layout, Card, Button, List } from "components"

const QUERY_KEY = "Random"

const fetcher = async () => {
  const result = await (
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  ).json()
  return summarise(result.drinks[0])
}

const Random = () => {
  const { isLoading, error, data, refetch } = useQuery([QUERY_KEY], fetcher, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>error...</div>

  return (
    <>
      <Navbar />
      <Layout>
        <Search />
        <section className="py-8 gap-8 w-full flex items-center justify-center flex-col">
          <Card image={data.image} title={data.name} summary={data.method[0]} />
          <Button onClick={refetch}>Refetch</Button>
          <List />
        </section>
      </Layout>
    </>
    // <div className="p-8">
    //   <h1 className="text-4xl text-stone-900">{data.name}</h1>
    //   <p>{data.id}</p>
    //   <Image src={data.image} alt="" height={300} width={300} />
    //   <h2 className="text-2xl text-stone-900">Method</h2>
    //   <ol className="list-decimal">
    //     {data.method.map((step) => (
    //       <li key={step}>{step}</li>
    //     ))}
    //   </ol>
    //   <button
    //     className="p-4 rounded bg-indigo-700 text-white"
    //     onClick={() => refetch()}
    //   >
    //     Find random cocktail
    //   </button>
    // </div>
  )
}

export default Random
