import { dehydrate } from "@tanstack/react-query"

import { SquareCard } from "components"
import { queryClient } from "lib/queryClient"

//TODO: This could be moved to a nicer location
import { useLatest } from "modules/Latest/hooks"
import { KEY } from "modules/Latest/config"
import { cocktail } from "types/cocktail"

export const getStaticProps = async () => {
  await queryClient.prefetchQuery([KEY], useLatest)

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
      id={KEY}
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
