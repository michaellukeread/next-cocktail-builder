import React from "react"

import { Spinner, Carousel } from "components"

import { useLatest } from "./hooks"

const Latest = () => {
  const { isLoading, isFetching, error, data } = useLatest()

  if (error) return <div>Something went wrong</div>
  if (isLoading || isFetching) return <Spinner />

  return (
    <>
      <h4 className="text-center lg:text-left text-6xl text-white font-abrilFatface mb-8">
        Latest
      </h4>
      <Carousel items={data} />
    </>
  )
}

export default Latest
