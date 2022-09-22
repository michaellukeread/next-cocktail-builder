import { dehydrate } from "@tanstack/react-query"
import { NextPage, GetServerSideProps } from "next"

import { SquareCard } from "components"
import { queryClient } from "lib/queryClient"

import { useFilterBy } from "features/cocktails/hooks"
import { FILTER_BY_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"

const filter = "glass"

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  await queryClient.prefetchQuery([FILTER_BY_KEY, filter, query.glass], () =>
    useFilterBy(filter, query.glass as string)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      glass: query.glass,
    },
  }
}

type Props = {
  glass: string
}

const Glass: NextPage<Props> = ({ glass }) => {
  const { data, isLoading, isFetching, error } = useFilterBy(filter, glass)

  if (isLoading || isFetching) return <div>Loading...</div>
  if (error) return <div>Error....</div>
  if (typeof data === "string") return <div>Glass type does not exist...</div>

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

export default Glass
