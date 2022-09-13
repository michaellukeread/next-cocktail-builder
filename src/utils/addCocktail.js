import { useSession } from "lib/next-auth-react-query"

const addCocktail = async ({ id }) => {
  const [session] = useSession()

  if (!session) return

  const response = await fetch("/api/cocktails", {
    method: "POST",
    body: { email: session.user.email, drink: id },
  })

  console.debug("response", response)
}

export default addCocktail
