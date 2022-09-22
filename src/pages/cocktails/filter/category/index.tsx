import { dehydrate } from "@tanstack/react-query"

import { queryClient } from "lib/queryClient"
import { useListBy } from "features/cocktails/hooks"
import { LIST_BY_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"
import { BasicCard } from "components/Cards"

const filter = "category"

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

  return (
    <section
      id={LIST_BY_KEY}
      className="grid grid-cols-autofit gap-8 container mx-auto"
    >
      {data.map(({ strCategory }: cocktail) => (
        <BasicCard
          key={strCategory}
          to={`/cocktails/filter/${filter}/${strCategory}`}
        >
          {strCategory}
        </BasicCard>
      ))}
    </section>
  )
}

export default Index
