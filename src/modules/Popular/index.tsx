import React from "react"

import { Spinner, Carousel } from "components"
import { usePopular } from "./hooks"

import "swiper/css"
import "swiper/css/pagination"

const Popular = () => {
  const { isLoading, isFetching, error, data } = usePopular()

  if (error) return <div>Something went wrong</div>
  if (isLoading || isFetching) return <Spinner />

  return (
    <>
      <h4 className="text-center lg:text-left text-6xl text-white font-abrilFatface mb-8">
        Popular
      </h4>
      <Carousel items={data} />
    </>
  )
}

export default Popular
