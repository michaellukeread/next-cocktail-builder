import { dehydrate } from "@tanstack/react-query"
import { NextPage, GetServerSideProps } from "next"

import { SquareCard } from "components"
import { queryClient } from "lib/queryClient"

import { useFilterBy } from "features/cocktails/hooks"
import { FILTER_BY_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"

const filter = "ingredient"

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  await queryClient.prefetchQuery(
    [FILTER_BY_KEY, filter, query.ingredient],
    () => useFilterBy(filter, query.ingredient as string)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ingredient: query.ingredient,
    },
  }
}

type Props = {
  ingredient: string
}

const Ingredient: NextPage<Props> = ({ ingredient }) => {
  const { data, isLoading, isFetching, error } = useFilterBy(filter, ingredient)

  if (isLoading || isFetching) return <div>Loading...</div>
  if (error) return <div>Error....</div>
  if (typeof data === "string") return <div>Ingredient does not exist...</div>

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

export default Ingredient
