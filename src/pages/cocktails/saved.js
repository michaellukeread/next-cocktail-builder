import { useSession } from "lib/next-auth-react-query"
import { useQuery } from "@tanstack/react-query"

const getUserLoggedInUserCocktails = async () => {
  const response = await fetch("/api/userCocktails")

  console.debug("getUserLoggedInUserCocktails response", await response.json())
}

const addCocktail = async (id) => {
  const response = await fetch("/api/userCocktails", {
    method: "POST",
    body: JSON.stringify({ id }),
  })

  return await response.json()
}

const fetcher = async () => {
  const response = await fetch("/api/userCocktails")
  return response.json()
}

const Saved = () => {
  const [session, loading] = useSession()
  const { data } = useQuery(["user"], fetcher)

  if (loading) return <div>Loading...</div>
  if (!session) return <div>You need to be logged into see this page</div>

  return (
    <main className="bg-neutral-900">
      <section
        id="saved"
        className="flex flex-col py-16 gap-8 container mx-auto text-white"
      >
        <button
          className="bg-white px-4 py-2 rounded text-black hover:ring-2"
          onClick={() => getUserLoggedInUserCocktails()}
        >
          Get Cocktails
        </button>
        <button
          className="bg-white px-4 py-2 rounded text-black hover:ring-2"
          onClick={() => addCocktail({ id: "10003" })}
        >
          Add Cocktail
        </button>
        <h4>Saved Cocktails</h4>
        {data && data.map((id) => <p>{id}</p>)}
      </section>
    </main>
  )
}

export default Saved
