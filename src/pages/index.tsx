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
    name: "Random Cocktails",
    to: "/cocktails/random",
    className: "bg-cocktail2",
  },
  {
    name: "Search By Ingredients",
    to: "/cocktails/ingredients",
    className: "bg-cocktail3",
  },
  {
    name: "Search By Letter",
    to: "/cocktails/byletter",
    className: "bg-cocktail3",
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
