import { dehydrate } from "@tanstack/react-query"

import { SquareCard } from "components"
import { queryClient } from "lib/queryClient"

//TODO: This could be moved to a nicer location
import { usePopular } from "modules/Popular/hooks"
import { KEY } from "modules/Popular/config"
import { cocktail } from "types/cocktail"

export const getStaticProps = async () => {
  await queryClient.prefetchQuery([KEY], usePopular)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Popular = () => {
  const { data } = usePopular()

  return (
    <section
      id="popular"
      className="grid grid-cols-autofit gap-8 container mx-auto"
    >
      {data.map(({ idDrink, strDrink, strDrinkThumb }: cocktail) => (
        <SquareCard
          key={idDrink}
          to={idDrink}
          title={strDrink}
          image={strDrinkThumb}
        />
      ))}
    </section>
  )
}

export default Popular
