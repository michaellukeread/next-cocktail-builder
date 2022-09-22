import React from "react"

import { FeaturedCard } from "components"
import { Popular, Latest } from "modules"

//TODO: Move this to an API call
const FeaturedCards = [
  {
    name: "Popular Cocktails",
    to: "/cocktails/popular",
    className: "bg-cocktail1",
  },
  {
    name: "Latest Cocktails",
    to: "/cocktails/latest",
    className: "bg-cocktail2",
  },
  {
    name: "Random Cocktail",
    to: "/cocktails/random",
    className: "bg-cocktail3",
  },
  {
    name: "Filter By Glass",
    to: "/cocktails/filter/glass",
    className: "bg-cocktail3",
  },
  {
    name: "Filter By Category",
    to: "/cocktails/filter/category",
    className: "bg-cocktail2",
  },
  {
    name: "Filter By Ingredient",
    to: "/cocktails/filter/ingredient",
    className: "bg-cocktail1",
  },
]

const Home = () => (
  <>
    <section className="grid grid-cols-autofit gap-8">
      {FeaturedCards.map(({ name, to, className }) => (
        <FeaturedCard key={name} name={name} to={to} className={className} />
      ))}
    </section>
    <section>
      <Popular />
    </section>
    <section>
      <Latest />
    </section>
  </>
)

export default Home
