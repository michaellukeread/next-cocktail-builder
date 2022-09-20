import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { SquareCard } from "components"

import { BREAKPOINTS, DEFAULT_SLIDES } from "./config"

import "swiper/css"

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
    slidesPerView={DEFAULT_SLIDES}
    spaceBetween={24}
    breakpoints={BREAKPOINTS}
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
