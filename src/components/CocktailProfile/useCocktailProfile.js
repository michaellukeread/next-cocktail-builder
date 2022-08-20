import {
  findIngredients,
  findMeasurements,
  measurementsAndIngredients,
} from "utils"

const useCocktailProfile = (strInstructions, rest) => {
  const method = strInstructions
    ? strInstructions.split(".").slice(0, -1)
    : null

  const ingredients = findIngredients(rest)
  const measurements = findMeasurements(rest)
  const ingredientsWithMeasurements = measurementsAndIngredients(
    ingredients,
    measurements
  )

  return { method, ingredientsWithMeasurements }
}

export { useCocktailProfile }
