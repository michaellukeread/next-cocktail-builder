import { dehydrate } from "@tanstack/react-query"

import { SquareCard } from "components"
import { queryClient } from "lib/queryClient"

import { useLatest } from "features/cocktails/hooks"
import { LATEST_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"

export const getStaticProps = async () => {
  await queryClient.prefetchQuery([LATEST_KEY], useLatest)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Latest = () => {
  const { data } = useLatest()

  return (
    <section
      id={LATEST_KEY}
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

export default Latest
