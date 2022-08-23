import { useQuery } from "@tanstack/react-query"
import { Swiper, SwiperSlide } from "swiper/react"

import { CocktailProfile, Spinner, Layout } from "components"
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
    <section className="h-[calc(100vh-8.25rem)]">
      <div className="border border-green-500">
        <Swiper
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i} className="bg-blue-500">
              {item.strDrink}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Popular
