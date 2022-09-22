import { dehydrate } from "@tanstack/react-query"

import { queryClient } from "lib/queryClient"
import { useListBy } from "features/cocktails/hooks"
import { LIST_BY_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"
import { BasicCard } from "components/Cards"

const filter = "ingredient"

export const getStaticProps = async () => {
  await queryClient.prefetchQuery([LIST_BY_KEY, filter], () =>
    useListBy(filter)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Index = () => {
  const { data } = useListBy(filter)

  console.debug("data", data)

  return (
    <section
      id={LIST_BY_KEY}
      className="grid grid-cols-autofit gap-8 container mx-auto"
    >
      {data.map(({ strIngredient1 }: cocktail) => (
        <BasicCard
          key={strIngredient1}
          to={`/cocktails/filter/${filter}/${strIngredient1}`}
        >
          {strIngredient1}
        </BasicCard>
      ))}
    </section>
  )
}

export default Index
