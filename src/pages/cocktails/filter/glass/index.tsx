import { dehydrate } from "@tanstack/react-query"
import Link from "next/link"

import { queryClient } from "lib/queryClient"
import { useListBy } from "features/cocktails/hooks"
import { LIST_BY_KEY } from "features/cocktails/config"
import { cocktail } from "types/cocktail"

const filter = "glass"

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

const Glass = () => {
  const { data } = useListBy(filter)

  return (
    <section
      id={LIST_BY_KEY}
      className="grid grid-cols-autofit gap-8 container mx-auto"
    >
      {data.map(({ strGlass }: cocktail) => (
        <Link key={strGlass} href={`/cocktails/filter/${filter}/${strGlass}`}>
          <a>{strGlass}</a>
        </Link>
      ))}
    </section>
  )
}

export default Glass
