import { dehydrate } from "@tanstack/react-query"

import { SquareCard } from "components"
import { queryClient } from "lib/queryClient"

import { usePopular } from "features/cocktails/hooks"
import { POPULAR_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"

export const getStaticProps = async () => {
  await queryClient.prefetchQuery([POPULAR_KEY], usePopular)

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
      id={POPULAR_KEY}
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
