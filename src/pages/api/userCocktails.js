import { addCocktailToUser, getUserCocktails } from "database/services"
import { POST, GET } from "config"

const userCocktails = async (req, res) => {
  const { method } = req

  if (method === POST) return await addCocktailToUser(req, res)
  if (method === GET) return await getUserCocktails(req, res)

  return res.status(405).json({ message: "Method not allowed" })
}

export default userCocktails
