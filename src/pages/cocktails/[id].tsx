import { NextPage, GetServerSideProps } from "next"
import { dehydrate } from "@tanstack/react-query"

import { useCocktailById } from "features/cocktails/hooks"
import { queryClient } from "lib/queryClient"
import { COCKTAIL_BY_ID_KEY } from "features/cocktails/config"

import Image from "next/image"

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  await queryClient.prefetchQuery([COCKTAIL_BY_ID_KEY, query.id], () =>
    useCocktailById(query.id as string)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: query.id,
    },
  }
}

type Props = {
  id: string
}

const Cocktail: NextPage<Props> = ({ id }) => {
  const { isLoading, isFetching, error, data } = useCocktailById(id)

  if (isLoading || isFetching) return <div className="screen">Loading...</div>
  if (error) return <div>error...</div>

  return (
    <section className="grid grid-cols-2">
      <div className="col-span-1">
        <Image
          src={data.strDrinkThumb}
          alt={data.strDrink}
          width={200}
          height={200}
        />
      </div>

      <div className="p-8 flex flex-col gap-4 bg-neutral-900 col-span-1">
        <h3 className="font-abrilFatface text-7xl tracking-wide text-white">
          {data.strDrink}
        </h3>
      </div>
    </section>
  )
}

export default Cocktail
