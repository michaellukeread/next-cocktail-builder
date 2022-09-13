const useCocktail = () => {
  const addCocktail = async (id) => {
    const response = await fetch("/api/userCocktails", {
      method: "POST",
      body: JSON.stringify({ id }),
    })

    return await response.json()
  }

  const getCocktails = async () => {
    const response = await fetch("/api/userCocktails")

    return await response.json()
  }

  return { addCocktail, getCocktails }
}

export default useCocktail
