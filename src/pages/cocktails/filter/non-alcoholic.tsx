import { dehydrate } from "@tanstack/react-query"

import { SquareCard } from "components"
import { queryClient } from "lib/queryClient"

import { useFilterBy } from "features/cocktails/hooks"
import { FILTER_BY_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"

const filter = "alcoholic"
const item = "Non_Alcoholic"

export const getStaticProps = async () => {
  await queryClient.prefetchQuery([FILTER_BY_KEY, filter, item], () =>
    useFilterBy(filter, item)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const NonAlcoholic = () => {
  const { data } = useFilterBy(filter, item)

  return (
    <section
      id={FILTER_BY_KEY}
      className="grid grid-cols-autofit gap-8 container mx-auto"
    >
      {data.map(({ idDrink, strDrink, strDrinkThumb }: cocktail) => (
        <SquareCard
          key={idDrink}
          to={`/cocktails/${idDrink}`}
          title={strDrink}
          image={strDrinkThumb}
        />
      ))}
    </section>
  )
}

export default NonAlcoholic
