import { useCocktailById } from "features/cocktails/hooks/useCocktailById"
import Image from "next/image"

const Cocktail = ({ query }) => {
  console.debug("query", query)
  const { isLoading, isFetching, error, data } = useCocktailById(query.id)

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

Cocktail.getInitialProps = async ({ query }) => ({ query })

export default Cocktail
