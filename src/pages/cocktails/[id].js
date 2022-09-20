import { useQuery } from "@tanstack/react-query"

import { API_SERVER } from "config"
import Image from "next/image"

import {
  findIngredients,
  findMeasurements,
  measurementsAndIngredients,
} from "utils"

const QUERY_KEY = "id"

const fetcher = async (id) => {
  const response = await fetch(
    `${API_SERVER}${process.env.NEXT_PUBLIC_API_KEY}/lookup.php?i=${id}`
  )
  const data = await response.json()
  return data.drinks[0]
}

const Ingredient = ({ ingredient, measurement }) => (
  <li className="rounded-xl px-3 py-0.5 tracking-wide border border-white text-white">
    {measurement} {ingredient}
  </li>
)

const Id = ({ query }) => {
  const { isLoading, isFetching, error, data } = useQuery(
    [QUERY_KEY, query.id],
    () => fetcher(query.id),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading || isFetching) return <div className="screen">Loading...</div>
  if (error) return <div>error...{error}</div>

  const method = data.strInstructions
    ? data.strInstructions.split(".").slice(0, -1)
    : null

  const ingredients = findIngredients(data)
  const measurements = findMeasurements(data)
  const ingredientsWithMeasurements = measurementsAndIngredients(
    ingredients,
    measurements
  )

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
        <ol className="inline-flex flex-wrap gap-2">
          {ingredientsWithMeasurements.map((item) => (
            <Ingredient key={item.ingredient} {...item} />
          ))}
        </ol>
        {method && (
          <div className="border-t border-white text-white mt-4 flex flex-col gap-4">
            <h4 className="font-abrilFatface pt-4 text-3xl">Method</h4>
            <ol className="list-inside list-decimal font-lato">
              {method.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  )
}

Id.getInitialProps = async ({ query }) => ({ query })

export default Id
