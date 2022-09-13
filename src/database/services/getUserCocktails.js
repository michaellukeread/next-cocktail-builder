import { getUserId, getCocktails } from "database/helpers"

const getUserCocktails = async (req, res) => {
  try {
    const userId = await getUserId(req, res)
    const cocktails = await getCocktails(userId)

    return res.status(200).json(cocktails)
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .json({ error: "error reading from database", success: false })
  }
}

export default getUserCocktails
