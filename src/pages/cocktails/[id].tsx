import { NextPage, GetServerSideProps } from "next"
import { dehydrate } from "@tanstack/react-query"

import { useCocktailById } from "features/cocktails/hooks"
import { queryClient } from "lib/queryClient"
import { COCKTAIL_BY_ID_KEY } from "features/cocktails/config"

import Image from "next/future/image"

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

  const { strDrinkThumb, strDrink } = data

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 border border-primary rounded-lg overflow-hidden">
        <div className="col-span-1">
          <Image
            src={strDrinkThumb}
            alt={strDrink}
            width={400}
            height={400}
            className="w-full"
          />
        </div>

        <div className="py-4 flex flex-col gap-4 bg-neutral-900 col-span-1">
          <h3 className="text-center font-abrilFatface text-7xl tracking-wide text-white">
            {strDrink}
          </h3>
        </div>
      </section>
      <div
        id="debugging"
        className="container border border-primary overflow-auto"
      >
        <pre className="text-xs">{JSON.stringify(data, null, 4)}</pre>
      </div>
    </>
  )
}

export default Cocktail
