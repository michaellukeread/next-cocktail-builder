const summarise = (cocktail) => {
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strInstructions,
    strGlass: glass,
    strAlcoholic: isAlcoholic,
  } = cocktail
  const method = strInstructions.split(".").slice(0, -1)

  return { id, name, image, method, glass, isAlcoholic }
}

export default summarise
