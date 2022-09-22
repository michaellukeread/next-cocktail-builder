import { dehydrate } from "@tanstack/react-query"
import Link from "next/link"

import { queryClient } from "lib/queryClient"
import { useListBy } from "features/cocktails/hooks"
import { LIST_BY_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"

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
        <Link
          key={strCategory}
          href={`/cocktails/filter/${filter}/${strCategory}`}
        >
          <a>{strCategory}</a>
        </Link>
      ))}
    </section>
  )
}

export default Index
