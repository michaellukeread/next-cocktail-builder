export default async function handler(req, res) {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  )

  const data = await response.json()

  res.status(200).json({ data })
}
