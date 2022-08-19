export default async function handler(req, res) {
  const { id } = req.query

  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  )

  const data = await response.json()

  res.status(200).json({ data })
}
