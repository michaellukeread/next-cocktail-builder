import { dehydrate } from "@tanstack/react-query"
import { NextPage } from "next"

import { SquareCard } from "components"
import { queryClient } from "lib/queryClient"

import { useFilterBy } from "features/cocktails/hooks"
import { FILTER_BY_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"

const filter = "category"

export const getServerSideProps = async ({ query }) => {
  await queryClient.prefetchQuery([FILTER_BY_KEY, filter, query.category], () =>
    useFilterBy(filter, query.category)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      category: query.category,
    },
  }
}

type Props = {
  category: string
}

const Category: NextPage<Props> = ({ category }) => {
  const { data, isLoading, isFetching, error } = useFilterBy(filter, category)

  if (isLoading || isFetching) return <div>Loading...</div>
  if (error) return <div>Error....</div>
  if (typeof data === "string")
    return <div>Category type does not exist...</div>

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

export default Category