import Image from "next/image"
import { useRouter } from "next/router"

import { useCocktail } from "hooks"

// const fetchCocktailById = async (id) => {
//   const result = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
//   )
//   const data = await result.json()
//   return data.drinks
// }

// const useCocktailById = (id) => {
//   return useQuery(["cocktailById"], () => fetchCocktailById(id))
// }

// export async function getServerSideProps(context) {
//   const id = context.params.id

//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery(["Cocktail"], () => fetcher(id))

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       id,
//     },
//   }
// }

const Cocktail = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  const { data, isLoading, isFetching, error } = useCocktail("Cocktail", id)

  if (isFetching) return <div>Fetching...</div>
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>error...</div>

  const { id: cocktailId, name, image, method } = data

  return (
    <div className="p-8">
      <h1 className="text-4xl text-stone-900">{name}</h1>
      <p>{cocktailId}</p>
      <Image src={image} alt="" height={300} width={300} />
      <h2 className="text-2xl text-stone-900">Method</h2>
      <ol className="list-decimal">
        {method.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default Cocktail
