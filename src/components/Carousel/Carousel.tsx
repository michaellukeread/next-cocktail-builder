import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import { SquareCard } from "components"

import { BREAKPOINTS, DEFAULT_SLIDES } from "./config"

import "swiper/css"
import "swiper/css/pagination"

type Item = {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
}

interface CarouselProps {
  items: Item[]
}

const Carousel: FC<CarouselProps> = ({ items }) => (
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    slidesPerView={DEFAULT_SLIDES}
    spaceBetween={16}
    breakpoints={BREAKPOINTS}
    className="pr-8 lg:pr-0"
  >
    {items.map(({ idDrink, strDrink, strDrinkThumb }) => (
      <SwiperSlide key={idDrink} className="relative">
        <SquareCard
          image={strDrinkThumb}
          title={strDrink}
          to={`/cocktails/${idDrink}`}
        />
      </SwiperSlide>
    ))}
  </Swiper>
)

export default Carousel
