import { useQuery } from "@tanstack/react-query"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import Link from "next/link"

import { Spinner } from "components"
import { API_SERVER } from "config"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const QUERY_KEY = "latest"

const fetcher = async () => {
  const response = await fetch(
    `${API_SERVER}${process.env.NEXT_PUBLIC_API_KEY}/latest.php`
  )
  const data = await response.json()
  return data.drinks
}

const Latest = () => {
  const { isLoading, isFetching, error, data } = useQuery(
    [QUERY_KEY],
    fetcher,
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading) return <Spinner />

  return (
    <>
      <h4 className="text-6xl text-white font-abrilFatface">Latest</h4>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={4}
        spaceBetween={24}
        className="p-16"
      >
        {data.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <SwiperSlide key={idDrink} className="relative">
            <Link href={`/cocktails/${idDrink}`}>
              <a>
                <div
                  className="h-full aspect-square rounded flex items-center justify-center bg-cover"
                  style={{ backgroundImage: `url(${strDrinkThumb})` }}
                />
                <h4 className="absolute top-1/2 w-full text-center font-abrilFatface text-5xl">
                  {strDrink}
                </h4>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Latest
