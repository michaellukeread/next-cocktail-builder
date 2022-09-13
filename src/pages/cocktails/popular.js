import { useQuery } from "@tanstack/react-query"
import { Swiper, SwiperSlide } from "swiper/react"

import { CocktailProfile, Spinner, Layout, Card } from "components"
import { API_SERVER } from "config"

import "swiper/css"

const QUERY_KEY = "popular"

const fetcher = async () => {
  const response = await fetch(
    `${API_SERVER}${process.env.NEXT_PUBLIC_API_KEY}/popular.php`
  )
  const data = await response.json()
  return data.drinks
}

const Popular = () => {
  const { isLoading, isFetching, error, data } = useQuery(
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
      <Layout className="mt-8 flex items-center flex-col gap-8">
        <Spinner />
      </Layout>
    )
  if (error) return <div>error...</div>

  return (
    <main className="bg-neutral-900">
      <section
        id="popular"
        className="flex flex-col py-16 gap-8 container mx-auto "
      >
        {data.map((item) => (
          <Card key={item.strDrink} variant="overview" {...item} />
        ))}
      </section>
    </main>
  )
}

export default Popular
